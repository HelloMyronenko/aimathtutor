import React, { useState, useEffect } from 'react'
import { Check, X } from 'lucide-react'
import Confetti from './Confetti'

interface MathProblemProps {
  difficulty: string
  onCorrectAnswer: () => void
  onIncorrectAnswer: () => void
  problemType: string
  theme: string
}

const MathProblem: React.FC<MathProblemProps> = ({ 
  difficulty, 
  onCorrectAnswer, 
  onIncorrectAnswer,
  problemType,
  theme
}) => {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operation, setOperation] = useState('+')
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)

  const generateProblem = () => {
    let n1, n2, op

    if (problemType === 'mixed') {
      const operations = ['+', '-', '×', '÷']
      op = operations[Math.floor(Math.random() * operations.length)]
    } else {
      op = problemType
    }

    switch (difficulty) {
      case 'easy':
        n1 = Math.floor(Math.random() * 10) + 1
        n2 = Math.floor(Math.random() * 10) + 1
        break
      case 'medium':
        n1 = Math.floor(Math.random() * 20) + 1
        n2 = Math.floor(Math.random() * 20) + 1
        break
      case 'hard':
        n1 = Math.floor(Math.random() * 50) + 1
        n2 = Math.floor(Math.random() * 30) + 1
        break
      default:
        n1 = Math.floor(Math.random() * 10) + 1
        n2 = Math.floor(Math.random() * 10) + 1
    }

    // For subtraction, ensure n1 >= n2 to avoid negative results
    if (op === '-' && n1 < n2) {
      [n1, n2] = [n2, n1]
    }

    // For division, ensure it results in a whole number
    if (op === '÷') {
      n2 = Math.max(1, n2) // Avoid division by zero
      n1 = n2 * Math.floor(Math.random() * 10 + 1)
    }

    setNum1(n1)
    setNum2(n2)
    setOperation(op)
    setUserAnswer('')
    setFeedback(null)
  }

  useEffect(() => {
    generateProblem()
  }, [difficulty, problemType])

  const calculateCorrectAnswer = (): number => {
    switch (operation) {
      case '+':
        return num1 + num2
      case '-':
        return num1 - num2
      case '×':
        return num1 * num2
      case '÷':
        return num1 / num2
      default:
        return 0
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const correctAnswer = calculateCorrectAnswer()
    const isCorrect = parseInt(userAnswer) === correctAnswer
    
    if (isCorrect) {
      setFeedback('correct')
      setShowConfetti(true)
      onCorrectAnswer()
      setTimeout(() => {
        setShowConfetti(false)
        generateProblem()
      }, 2000)
    } else {
      setFeedback('incorrect')
      onIncorrectAnswer()
    }
  }

  const getThemeColors = () => {
    switch (theme) {
      case 'space':
        return 'bg-indigo-100 border-indigo-300'
      case 'ocean':
        return 'bg-blue-100 border-blue-300'
      case 'forest':
        return 'bg-green-100 border-green-300'
      case 'candy':
        return 'bg-pink-100 border-pink-300'
      default:
        return 'bg-indigo-100 border-indigo-300'
    }
  }

  return (
    <div className={`p-6 rounded-xl border-2 ${getThemeColors()} relative overflow-hidden`}>
      {showConfetti && <Confetti />}
      
      <div className="text-center mb-6">
        <div className="flex items-center justify-center text-4xl font-bold mb-4 gap-4">
          <span>{num1}</span>
          <span>{operation}</span>
          <span>{num2}</span>
          <span>=</span>
          <span>?</span>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="input text-center text-2xl w-32 mb-4"
            placeholder="Answer"
            autoFocus
          />
          
          <button 
            type="submit" 
            className="btn btn-primary w-32"
            disabled={userAnswer === ''}
          >
            Check
          </button>
        </form>
      </div>
      
      {feedback && (
        <div className={`mt-4 p-3 rounded-lg text-center ${
          feedback === 'correct' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          <div className="flex items-center justify-center gap-2">
            {feedback === 'correct' ? (
              <>
                <Check size={20} className="text-green-600" />
                <span>Correct! Great job!</span>
              </>
            ) : (
              <>
                <X size={20} className="text-red-600" />
                <span>Not quite. The correct answer is {calculateCorrectAnswer()}.</span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MathProblem
