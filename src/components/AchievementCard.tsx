import React from 'react'

interface AchievementCardProps {
  title: string
  description: string
  icon: React.ReactNode
  unlocked: boolean
  progress?: number
  total?: number
  theme: string
}

const AchievementCard: React.FC<AchievementCardProps> = ({ 
  title, 
  description, 
  icon, 
  unlocked, 
  progress = 0, 
  total = 1,
  theme
}) => {
  const percentage = Math.min(100, Math.round((progress / total) * 100))
  
  const getThemeColors = () => {
    if (!unlocked) {
      return 'bg-gray-100 border-gray-200'
    }
    
    switch (theme) {
      case 'space':
        return 'bg-indigo-50 border-indigo-200'
      case 'ocean':
        return 'bg-blue-50 border-blue-200'
      case 'forest':
        return 'bg-green-50 border-green-200'
      case 'candy':
        return 'bg-pink-50 border-pink-200'
      default:
        return 'bg-indigo-50 border-indigo-200'
    }
  }
  
  const getProgressColor = () => {
    if (!unlocked) return 'bg-gray-400'
    
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
    <div className={`border rounded-xl p-4 ${getThemeColors()}`}>
      <div className="flex items-center mb-3">
        <div className={`mr-3 ${unlocked ? 'text-yellow-500' : 'text-gray-400'}`}>
          {icon}
        </div>
        <div>
          <h3 className={`text-lg font-semibold ${unlocked ? 'text-gray-800' : 'text-gray-500'}`}>
            {title}
          </h3>
          <p className={`text-sm ${unlocked ? 'text-gray-600' : 'text-gray-400'}`}>
            {description}
          </p>
        </div>
      </div>
      
      {total > 1 && (
        <div className="mt-2">
          <div className="flex justify-between text-xs mb-1">
            <span className={unlocked ? 'text-gray-600' : 'text-gray-400'}>
              Progress: {progress}/{total}
            </span>
            <span className={unlocked ? 'text-gray-600' : 'text-gray-400'}>
              {percentage}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className={`h-1.5 rounded-full ${getProgressColor()}`} 
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AchievementCard
