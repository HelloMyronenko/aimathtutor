import React from 'react'

interface FooterProps {
  darkMode: boolean
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`mt-8 py-4 text-center text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
      <p>© {new Date().getFullYear()} Math Buddy. All rights reserved.</p>
      <p className="mt-1">Made with ❤️ for young learners</p>
      <div className="mt-3 flex items-center justify-center">
        <span>Powered by</span>
        <a 
          href="https://www.chatandbuild.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center ml-1 hover:underline"
        >
          <img 
            src="https://www.chatandbuild.com/favicon.png" 
            alt="Chatandbuild logo" 
            className="w-4 h-4 mr-1" 
          />
          <span>Chatandbuild</span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
