import React, { useState, useEffect } from 'react'
import { Brain, Calculator, Award, Home, BookOpen, Settings, Moon, Sun } from 'lucide-react'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import PracticePage from './pages/PracticePage'
import LessonPage from './pages/LessonPage'
import AchievementsPage from './pages/AchievementsPage'
import SettingsPage from './pages/SettingsPage'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [difficulty, setDifficulty] = useState('easy')
  const [theme, setTheme] = useState('space')
  const [darkMode, setDarkMode] = useState(false)

  // Check for user's preferred color scheme on initial load
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true)
    }
  }, [])

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const navItems = [
    { id: 'dashboard', label: 'Home', icon: <Home size={20} /> },
    { id: 'practice', label: 'Practice', icon: <Calculator size={20} /> },
    { id: 'lessons', label: 'Lessons', icon: <BookOpen size={20} /> },
    { id: 'achievements', label: 'Achievements', icon: <Award size={20} /> },
    { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
  ]

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard setCurrentPage={setCurrentPage} theme={theme} darkMode={darkMode} />
      case 'practice':
        return <PracticePage difficulty={difficulty} theme={theme} darkMode={darkMode} />
      case 'lessons':
        return <LessonPage theme={theme} darkMode={darkMode} />
      case 'achievements':
        return <AchievementsPage theme={theme} darkMode={darkMode} />
      case 'settings':
        return <SettingsPage 
          difficulty={difficulty} 
          setDifficulty={setDifficulty} 
          theme={theme}
          setTheme={setTheme}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      default:
        return <Dashboard setCurrentPage={setCurrentPage} theme={theme} darkMode={darkMode} />
    }
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${getThemeBackground(theme, darkMode)} font-comic transition-colors duration-300`}>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Brain size={32} className="text-indigo-600 dark:text-indigo-400" />
              <h1 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">Math Buddy</h1>
            </div>
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <Navbar 
            items={navItems} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage} 
            darkMode={darkMode}
          />
        </header>
        
        <main className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 min-h-[calc(100vh-200px)] text-gray-800 dark:text-gray-200 transition-colors duration-300">
          {renderPage()}
        </main>

        <Footer darkMode={darkMode} />
      </div>
    </div>
  )
}

function getThemeBackground(theme: string, darkMode: boolean) {
  if (darkMode) {
    return 'bg-gray-900'
  }
  
  switch (theme) {
    case 'space':
      return 'bg-gradient-to-b from-indigo-100 to-purple-100'
    case 'ocean':
      return 'bg-gradient-to-b from-blue-100 to-cyan-100'
    case 'forest':
      return 'bg-gradient-to-b from-green-100 to-emerald-100'
    case 'candy':
      return 'bg-gradient-to-b from-pink-100 to-rose-100'
    default:
      return 'bg-gradient-to-b from-indigo-100 to-purple-100'
  }
}

export default App
