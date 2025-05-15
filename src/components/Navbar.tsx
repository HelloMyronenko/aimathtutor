import React from 'react'

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
}

interface NavbarProps {
  items: NavItem[]
  currentPage: string
  setCurrentPage: (page: string) => void
  darkMode: boolean
}

const Navbar: React.FC<NavbarProps> = ({ items, currentPage, setCurrentPage, darkMode }) => {
  return (
    <nav className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-full shadow-md p-2 transition-colors duration-300`}>
      <ul className="flex items-center justify-between">
        {items.map((item) => (
          <li key={item.id} className="flex-1">
            <button
              onClick={() => setCurrentPage(item.id)}
              className={`w-full flex flex-col items-center justify-center py-2 px-1 rounded-full transition-all duration-200 ${
                currentPage === item.id
                  ? darkMode 
                    ? 'bg-indigo-900 text-indigo-300' 
                    : 'bg-indigo-100 text-indigo-600'
                  : darkMode
                    ? 'text-gray-400 hover:text-indigo-300 hover:bg-indigo-900'
                    : 'text-gray-500 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              <span className="mb-1">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
