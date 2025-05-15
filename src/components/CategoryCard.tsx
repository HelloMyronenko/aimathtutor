import React from 'react'

interface CategoryCardProps {
  title: string
  description: string
  icon: React.ReactNode
  onClick: () => void
  theme: string
  darkMode: boolean
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  description, 
  icon, 
  onClick,
  theme,
  darkMode
}) => {
  const getIconColor = () => {
    if (darkMode) return 'text-indigo-400'
    
    switch (theme) {
      case 'space':
        return 'text-indigo-600'
      case 'ocean':
        return 'text-blue-600'
      case 'forest':
        return 'text-green-600'
      case 'candy':
        return 'text-pink-600'
      default:
        return 'text-indigo-600'
    }
  }
  
  return (
    <div 
      className={`p-4 border rounded-xl cursor-pointer transition-all duration-200 hover:shadow-md ${
        darkMode 
          ? 'bg-gray-800 border-gray-700 hover:bg-gray-750' 
          : 'bg-white border-gray-200 hover:border-indigo-300'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-2">
        <div className={`p-2 rounded-lg mr-3 ${darkMode ? 'bg-gray-700' : 'bg-indigo-100'}`}>
          <div className={getIconColor()}>
            {icon}
          </div>
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
    </div>
  )
}

export default CategoryCard
