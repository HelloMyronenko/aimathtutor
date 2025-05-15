import React from 'react'

interface LessonCardProps {
  title: string
  description: string
  icon: React.ReactNode
  completed: boolean
  onClick: () => void
  theme: string
}

const LessonCard: React.FC<LessonCardProps> = ({ 
  title, 
  description, 
  icon, 
  completed, 
  onClick,
  theme
}) => {
  const getThemeColors = () => {
    if (completed) {
      switch (theme) {
        case 'space':
          return 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100'
        case 'ocean':
          return 'bg-blue-50 border-blue-200 hover:bg-blue-100'
        case 'forest':
          return 'bg-green-50 border-green-200 hover:bg-green-100'
        case 'candy':
          return 'bg-pink-50 border-pink-200 hover:bg-pink-100'
        default:
          return 'bg-indigo-50 border-indigo-200 hover:bg-indigo-100'
      }
    }
    return 'bg-white border-gray-200 hover:bg-gray-50'
  }

  return (
    <div 
      className={`border rounded-xl p-4 cursor-pointer transition-all duration-200 ${getThemeColors()}`}
      onClick={onClick}
    >
      <div className="flex items-center mb-2">
        <div className={`mr-3 ${completed ? 'text-green-500' : 'text-indigo-600'}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      
      <div className="mt-3 flex justify-end">
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${
          completed 
            ? 'bg-green-100 text-green-800' 
            : 'bg-indigo-100 text-indigo-800'
        }`}>
          {completed ? 'Completed' : 'Start Learning'}
        </span>
      </div>
    </div>
  )
}

export default LessonCard
