import React, { useState } from 'react'
import { PlusCircle, MinusCircle, X, Divide, Shuffle } from 'lucide-react'
import MathProblem from '../components/MathProblem'
import ProgressBar from '../components/ProgressBar'

interface PracticePageProps {
  difficulty: string
  theme: string
}

const PracticePage: React.FC<PracticePageProps> = ({ difficulty, theme }) => {
  const [problemType, setProblemType] = useState('+')
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [totalProblems, setTotalProblems] = useState(0)
  
  const handleCorrectAnswer = () => {
    setScore(prev => prev + 1)
    setStreak(prev => prev + 1)
    setTotalProblems(prev => prev + 1)
  }
  
  const handleIncorrectAnswer = () => {
    setStreak(0)
    setTotalProblems(prev => prev + 1)
  }
  
  const problemTypes = [
    { id: '+', label: 'Addition', icon: <PlusCircle size={20} /> },
    { id: '-', label: 'Subtraction', icon: <MinusCircle size={20} /> },
    { id: '×', label: 'Multiplication', icon: <X size={20} /> },
    { id: '÷', label: 'Division', icon: <Divide size={20} /> },
    { id: 'mixed', label: 'Mixed', icon: <Shuffle size={20} /> }
  ]
  
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Math Practice</h2>
      
      <div className="mb-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {problemTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setProblemType(type.id)}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                problemType === type.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type.icon}
              <span>{type.label}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 border border-indigo-200 bg-indigo-50 rounded-xl text-center">
          <p className="text-gray-600 text-sm mb-1">Score</p>
          <p className="text-3xl font-bold text-indigo-600">{score}</p>
        </div>
        
        <div className="p-4 border border-indigo-200 bg-indigo-50 rounded-xl text-center">
          <p className="text-gray-600 text-sm mb-1">Current Streak</p>
          <p className="text-3xl font-bold text-indigo-600">{streak}</p>
        </div>
        
        <div className="p-4 border border-indigo-200 bg-indigo-50 rounded-xl text-center">
          <p className="text-gray-600 text-sm mb-1">Problems Solved</p>
          <p className="text-3xl font-bold text-indigo-600">{totalProblems}</p>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-600 mb-2">Difficulty: <span className="font-medium capitalize">{difficulty}</span></p>
        <ProgressBar 
          progress={score} 
          total={Math.max(10, totalProblems)} 
          label="Progress" 
          theme={theme}
        />
      </div>
      
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          <MathProblem 
            difficulty={difficulty} 
            onCorrectAnswer={handleCorrectAnswer}
            onIncorrectAnswer={handleIncorrectAnswer}
            problemType={problemType}
            theme={theme}
          />
        </div>
      </div>
    </div>
  )
}

export default PracticePage
