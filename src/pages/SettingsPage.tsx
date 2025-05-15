import React from 'react'
import { Settings, Moon, Sun, Palette } from 'lucide-react'

interface SettingsPageProps {
  difficulty: string
  setDifficulty: (difficulty: string) => void
  theme: string
  setTheme: (theme: string) => void
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const SettingsPage: React.FC<SettingsPageProps> = ({ 
  difficulty, 
  setDifficulty,
  theme,
  setTheme,
  darkMode,
  setDarkMode
}) => {
  const difficultyOptions = [
    { value: 'easy', label: 'Easy', description: 'Simple problems with numbers 1-10' },
    { value: 'medium', label: 'Medium', description: 'Moderate problems with numbers 1-20' },
    { value: 'hard', label: 'Hard', description: 'Challenging problems with numbers 1-50' }
  ]
  
  const themeOptions = [
    { value: 'space', label: 'Space Theme', color: darkMode ? 'bg-indigo-700' : 'bg-indigo-600' },
    { value: 'ocean', label: 'Ocean Theme', color: darkMode ? 'bg-blue-700' : 'bg-blue-600' },
    { value: 'forest', label: 'Forest Theme', color: darkMode ? 'bg-green-700' : 'bg-green-600' },
    { value: 'candy', label: 'Candy Theme', color: darkMode ? 'bg-pink-700' : 'bg-pink-600' }
  ]
  
  return (
    <div>
      <div className="flex items-center mb-6">
        <Settings size={24} className={`${darkMode ? 'text-indigo-400' : 'text-indigo-600'} mr-3`} />
        <h2 className="text-2xl font-bold">Settings</h2>
      </div>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Difficulty Level</h3>
          <div className="space-y-3">
            {difficultyOptions.map((option) => (
              <div 
                key={option.value}
                className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                  difficulty === option.value 
                    ? darkMode
                      ? 'border-indigo-500 bg-indigo-900/30'
                      : 'border-indigo-500 bg-indigo-50'
                    : darkMode
                      ? 'border-gray-700 hover:border-indigo-700'
                      : 'border-gray-200 hover:border-indigo-300'
                }`}
                onClick={() => setDifficulty(option.value)}
              >
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full mr-3 ${
                    difficulty === option.value 
                      ? darkMode
                        ? 'bg-indigo-500'
                        : 'bg-indigo-600'
                      : darkMode
                        ? 'border border-gray-500'
                        : 'border border-gray-400'
                  }`}>
                    {difficulty === option.value && (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-medium">{option.label}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{option.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Theme</h3>
          <div className="grid grid-cols-2 gap-3">
            {themeOptions.map((option) => (
              <div 
                key={option.value}
                className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                  theme === option.value 
                    ? darkMode
                      ? 'border-indigo-500 bg-indigo-900/30'
                      : 'border-indigo-500 bg-indigo-50'
                    : darkMode
                      ? 'border-gray-700 hover:border-indigo-700'
                      : 'border-gray-200 hover:border-indigo-300'
                }`}
                onClick={() => setTheme(option.value)}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full mr-3 ${option.color}`}></div>
                  <span className="font-medium">{option.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">Display</h3>
          <div className={`flex items-center justify-between p-4 border rounded-lg ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="flex items-center">
              {darkMode ? (
                <Sun size={20} className="text-gray-400 mr-3" />
              ) : (
                <Moon size={20} className="text-gray-600 mr-3" />
              )}
              <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </div>
            <div className="relative">
              <input 
                type="checkbox" 
                id="darkMode" 
                className="sr-only"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <label 
                htmlFor="darkMode" 
                className={`block w-12 h-6 rounded-full cursor-pointer ${
                  darkMode ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              >
                <span 
                  className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
                    darkMode ? 'left-7' : 'left-1'
                  }`}
                ></span>
              </label>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <div className={`p-4 border rounded-lg ${
            darkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Math Buddy v1.0.0</p>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>A fun and interactive math learning app for children.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
