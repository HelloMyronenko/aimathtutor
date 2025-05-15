import React from 'react'
import { Calculator, BookOpen, Award, PlusCircle, MinusCircle, X, Divide } from 'lucide-react'
import CategoryCard from '../components/CategoryCard'
import ProgressBar from '../components/ProgressBar'

interface DashboardProps {
  setCurrentPage: (page: string) => void
  theme: string
  darkMode: boolean
}

const Dashboard: React.FC<DashboardProps> = ({ setCurrentPage, theme, darkMode }) => {
  const categories = [
    {
      title: 'Addition',
      description: 'Learn to add numbers together',
      icon: <PlusCircle size={24} />,
      onClick: () => setCurrentPage('practice')
    },
    {
      title: 'Subtraction',
      description: 'Learn to subtract numbers',
      icon: <MinusCircle size={24} />,
      onClick: () => setCurrentPage('practice')
    },
    {
      title: 'Multiplication',
      description: 'Learn to multiply numbers',
      icon: <X size={24} />,
      onClick: () => setCurrentPage('practice')
    },
    {
      title: 'Division',
      description: 'Learn to divide numbers',
      icon: <Divide size={24} />,
      onClick: () => setCurrentPage('practice')
    }
  ]

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Welcome to Math Buddy!</h2>
        
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Continue Learning</h3>
              <p className="mb-4">You're making great progress! Keep it up!</p>
              <button 
                onClick={() => setCurrentPage('practice')}
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
              >
                Continue Practice
              </button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1633613286991-611fe299c4be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                alt="Math illustration" 
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className={`p-4 border rounded-xl ${darkMode ? 'border-indigo-800 bg-indigo-900/30' : 'border-indigo-200 bg-indigo-50'} transition-colors duration-300`}>
            <div className="flex items-center mb-3">
              <Calculator size={24} className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mr-3`} />
              <h3 className="text-lg font-semibold">Practice</h3>
            </div>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-3`}>Solve math problems to improve your skills</p>
            <ProgressBar progress={15} total={50} theme={theme} darkMode={darkMode} />
          </div>
          
          <div className={`p-4 border rounded-xl ${darkMode ? 'border-indigo-800 bg-indigo-900/30' : 'border-indigo-200 bg-indigo-50'} transition-colors duration-300`}>
            <div className="flex items-center mb-3">
              <BookOpen size={24} className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mr-3`} />
              <h3 className="text-lg font-semibold">Lessons</h3>
            </div>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-3`}>Learn math concepts through fun lessons</p>
            <ProgressBar progress={2} total={10} theme={theme} darkMode={darkMode} />
          </div>
          
          <div className={`p-4 border rounded-xl ${darkMode ? 'border-indigo-800 bg-indigo-900/30' : 'border-indigo-200 bg-indigo-50'} transition-colors duration-300`}>
            <div className="flex items-center mb-3">
              <Award size={24} className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mr-3`} />
              <h3 className="text-lg font-semibold">Achievements</h3>
            </div>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mb-3`}>Earn badges by completing challenges</p>
            <ProgressBar progress={3} total={12} theme={theme} darkMode={darkMode} />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-4">Math Categories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              icon={category.icon}
              onClick={category.onClick}
              theme={theme}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
