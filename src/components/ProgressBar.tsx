import React from 'react'

interface ProgressBarProps {
  progress: number
  total: number
  theme: string
  darkMode: boolean
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total, theme, darkMode }) => {
  const percentage = Math.min(Math.round((progress / total) * 100), 100)
  
  const getProgressColor = () => {
    if (darkMode) return 'bg-indigo-500'
    
    switch (theme) {
      case 'space':
        return 'bg-indigo-600'
      case 'ocean':
        return 'bg-blue-600'
      case 'forest':
        return 'bg-green-600'
      case 'candy':
        return 'bg-pink-600'
      default:
        return 'bg-indigo-600'
    }
  }
  
  return (
    <div>
      <div className="flex justify-between mb-1 text-sm">
        <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Progress</span>
        <span className="font-medium">{progress}/{total}</span>
      </div>
      <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div 
          className={`h-2 rounded-full ${getProgressColor()}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
