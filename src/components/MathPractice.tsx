import React, { useState, useEffect } from 'react'
import { RefreshCw, CheckCircle, XCircle } from 'lucide-react'
import Confetti from './Confetti'

interface MathPracticeProps {
  userName: string
  userAge: number
}

interface Problem {
  question: string
  options: number[]
  correctAnswer: number
}

const MathPractice: React.FC<MathPracticeProps> = ({ userName, userAge }) => {
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [problemCount, setProblemCount] = useState(0)
  const [showConfetti, setShowConfetti] = useState(false)
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy')

  // Generate a math problem based on user age and difficulty
  const generateProblem = () => {
    let num1, num2, operation, question, answer, options;
    
    // Adjust difficulty based on age
    const maxNum = 
      difficulty === 'easy' ? Math.min(10, userAge * 1) : 
      difficulty === 'medium' ? Math.min(20, userAge * 2) : 
      Math.min(50, userAge * 5);
    
    // Determine available operations based on age and difficulty
    let operations = ['+'];
    if (userAge >= 6 || difficulty !== 'easy') operations.push('-');
    if (userAge >= 8 || difficulty === 'hard') operations.push('×');
    if (userAge >= 10 && difficulty === 'hard') operations.push('÷');
    
    // Randomly select operation
    operation = operations[Math.floor(Math.random() * operations.length)];
    
    // Generate numbers based on operation
    if (operation === '+') {
      num1 = Math.floor(Math.random() * maxNum) + 1;
      num2 = Math.floor(Math.random() * maxNum) + 1;
      question = `${num1} + ${num2} = ?`;
      answer = num1 + num2;
    } else if (operation === '-') {
      num1 = Math.floor(Math.random() * maxNum) + 1;
      num2 = Math.floor(Math.random() * num1) + 1; // Ensure num2 <= num1 to avoid negative results
      question = `${num1} - ${num2} = ?`;
      answer = num1 - num2;
    } else if (operation === '×') {
      num1 = Math.floor(Math.random() * Math.min(10, maxNum/2)) + 1;
      num2 = Math.floor(Math.random() * Math.min(10, maxNum/2)) + 1;
      question = `${num1} × ${num2} = ?`;
      answer = num1 * num2;
    } else { // Division
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = Math.floor(Math.random() * 10) + 1;
      num1 = num2 * answer; // Ensure clean division
      question = `${num1} ÷ ${num2} = ?`;
    }
    
    // Generate options (including the correct answer)
    options = [answer];
    
    // Generate 3 wrong options
    while (options.length < 4) {
      let wrongAnswer;
      if (operation === '+' || operation === '×') {
        // For addition and multiplication, wrong answers can be slightly higher or lower
        wrongAnswer = answer + (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1);
      } else if (operation === '-') {
        // For subtraction, ensure wrong answers are non-negative
        wrongAnswer = Math.max(0, answer + (Math.floor(Math.random() * 5) + 1) * (Math.random() < 0.5 ? 1 : -1));
      } else { // Division
        // For division, wrong answers should be reasonable
        wrongAnswer = answer + (Math.floor(Math.random() * 3) + 1) * (Math.random() < 0.5 ? 1 : -1);
        wrongAnswer = Math.max(1, wrongAnswer); // Ensure positive
      }
      
      // Only add unique wrong answers
      if (!options.includes(wrongAnswer)) {
        options.push(wrongAnswer);
      }
    }
    
    // Shuffle options
    options.sort(() => Math.random() - 0.5);
    
    return {
      question,
      options,
      correctAnswer: answer
    };
  };

  // Initialize with a problem
  useEffect(() => {
    setCurrentProblem(generateProblem());
  }, [difficulty, userAge]);

  const handleAnswerSelect = (answer: number) => {
    if (isCorrect !== null) return; // Prevent selecting after answer is revealed
    
    setSelectedAnswer(answer);
    const correct = answer === currentProblem?.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
    
    setProblemCount(problemCount + 1);
    
    // Move to next problem after delay
    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      setCurrentProblem(generateProblem());
    }, 2000);
  };

  const getAnswerClass = (option: number) => {
    if (selectedAnswer !== option) return "answer-option";
    return isCorrect ? "answer-option-correct" : "answer-option-incorrect";
  };

  return (
    <div className="max-w-4xl mx-auto">
      {showConfetti && <Confetti />}
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-800">Math Practice</h1>
        <div className="flex items-center space-x-2 bg-indigo-100 px-4 py-2 rounded-full">
          <span className="font-semibold text-indigo-700">Score: {score}/{problemCount}</span>
        </div>
      </div>
      
      <div className="card mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-indigo-700">Choose Difficulty:</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => setDifficulty('easy')}
              className={`px-4 py-2 rounded-full ${difficulty === 'easy' 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 text-gray-700'}`}
            >
              Easy
            </button>
            <button 
              onClick={() => setDifficulty('medium')}
              className={`px-4 py-2 rounded-full ${difficulty === 'medium' 
                ? 'bg-yellow-500 text-white' 
                : 'bg-gray-200 text-gray-700'}`}
            >
              Medium
            </button>
            <button 
              onClick={() => setDifficulty('hard')}
              className={`px-4 py-2 rounded-full ${difficulty === 'hard' 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-200 text-gray-700'}`}
            >
              Hard
            </button>
          </div>
        </div>
        
        <div className="bg-indigo-50 rounded-xl p-8 mb-6">
          <p className="math-problem">{currentProblem?.question}</p>
          
          {isCorrect === true && (
            <div className="flex items-center justify-center text-green-500 mb-4">
              <CheckCircle size={24} className="mr-2" />
              <span className="text-lg font-bold">Correct! Great job!</span>
            </div>
          )}
          
          {isCorrect === false && (
            <div className="flex items-center justify-center text-red-500 mb-4">
              <XCircle size={24} className="mr-2" />
              <span className="text-lg font-bold">
                Not quite. The answer is {currentProblem?.correctAnswer}.
              </span>
            </div>
          )}
          
          <div className="grid grid-cols-2 gap-4 mt-6">
            {currentProblem?.options.map((option, index) => (
              <button
                key={index}
                className={getAnswerClass(option)}
                onClick={() => handleAnswerSelect(option)}
                disabled={isCorrect !== null}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            className="flex items-center space-x-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-semibold py-2 px-4 rounded-full"
            onClick={() => {
              setSelectedAnswer(null);
              setIsCorrect(null);
              setCurrentProblem(generateProblem());
            }}
          >
            <RefreshCw size={18} />
            <span>New Problem</span>
          </button>
        </div>
      </div>
      
      <div className="card bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-indigo-700 mb-2">Math Tips</h3>
            <p className="text-gray-600">
              {difficulty === 'easy' && "Try using your fingers to count when adding or subtracting small numbers!"}
              {difficulty === 'medium' && "For subtraction, you can count up from the smaller number to the larger one."}
              {difficulty === 'hard' && "When multiplying, remember that 6 × 7 is the same as 7 × 6. Use the one that's easier to remember!"}
            </p>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" 
            alt="Math learning character" 
            className="w-24 h-24 object-cover rounded-full character-bounce"
          />
        </div>
      </div>
    </div>
  )
}

export default MathPractice
