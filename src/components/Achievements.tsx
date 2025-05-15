import React from 'react'
import { Trophy, Star, Award, Medal, Zap, BookOpen, Calculator, Brain } from 'lucide-react'

interface AchievementsProps {
  userName: string
}

const Achievements: React.FC<AchievementsProps> = ({ userName }) => {
  // Mock data for achievements
  const achievements = [
    {
      id: 'first-login',
      title: 'First Steps',
      description: 'Logged in for the first time',
      icon: <Zap size={24} className="text-yellow-500" />,
      earned: true,
      date: '2 days ago'
    },
    {
      id: 'complete-5-problems',
      title: 'Problem Solver',
      description: 'Solved 5 math problems correctly',
      icon: <Calculator size={24} className="text-indigo-500" />,
      earned: true,
      date: '1 day ago'
    },
    {
      id: 'complete-lesson',
      title: 'Eager Learner',
      description: 'Completed your first lesson',
      icon: <BookOpen size={24} className="text-green-500" />,
      earned: true,
      date: '1 day ago'
    },
    {
      id: 'streak-3',
      title: 'On Fire',
      description: 'Practiced 3 days in a row',
      icon: <Zap size={24} className="text-orange-500" />,
      earned: false
    },
    {
      id: 'perfect-score',
      title: 'Perfect Score',
      description: 'Got 100% on a practice session',
      icon: <Star size={24} className="text-yellow-500" />,
      earned: false
    },
    {
      id: 'complete-10-problems',
      title: 'Math Wizard',
      description: 'Solved 10 math problems correctly',
      icon: <Brain size={24} className="text-purple-500" />,
      earned: false
    },
    {
      id: 'complete-5-lessons',
      title: 'Knowledge Seeker',
      description: 'Completed 5 different lessons',
      icon: <BookOpen size={24} className="text-blue-500" />,
      earned: false
    },
    {
      id: 'streak-7',
      title: 'Consistency Champion',
      description: 'Practiced 7 days in a row',
      icon: <Medal size={24} className="text-yellow-500" />,
      earned: false
    }
  ];
  
  const earnedAchievements = achievements.filter(a => a.earned);
  const lockedAchievements = achievements.filter(a => !a.earned);
  
  // Mock data for stats
  const stats = [
    { label: 'Problems Solved', value: 12 },
    { label: 'Lessons Completed', value: 3 },
    { label: 'Current Streak', value: '2 days' },
    { label: 'Time Spent Learning', value: '45 mins' }
  ];
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-800">Your Achievements</h1>
        <div className="flex items-center space-x-2 bg-indigo-100 px-4 py-2 rounded-full">
          <Trophy size={20} className="text-yellow-500" />
          <span className="font-semibold text-indigo-700">
            {earnedAchievements.length}/{achievements.length} Earned
          </span>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold text-indigo-700 mb-6">Your Learning Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-indigo-50 rounded-xl p-4 text-center">
              <p className="text-2xl font-bold text-indigo-700">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Earned Achievements */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold text-indigo-700 mb-6">
          <div className="flex items-center">
            <Award size={24} className="text-yellow-500 mr-2" />
            <span>Earned Badges</span>
          </div>
        </h2>
        
        {earnedAchievements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {earnedAchievements.map((achievement) => (
              <div key={achievement.id} className="flex items-center p-4 bg-green-50 rounded-xl border-2 border-green-200">
                <div className="bg-white p-3 rounded-full mr-4">
                  {achievement.icon}
                </div>
                <div>
                  <h3 className="font-bold text-indigo-700">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  <p className="text-xs text-green-600 mt-1">Earned {achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-4">
            You haven't earned any badges yet. Keep practicing!
          </p>
        )}
      </div>
      
      {/* Locked Achievements */}
      <div className="card">
        <h2 className="text-xl font-bold text-indigo-700 mb-6">
          <div className="flex items-center">
            <Medal size={24} className="text-gray-400 mr-2" />
            <span>Badges to Earn</span>
          </div>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {lockedAchievements.map((achievement) => (
            <div key={achievement.id} className="flex items-center p-4 bg-gray-50 rounded-xl border-2 border-gray-200">
              <div className="bg-white p-3 rounded-full mr-4 opacity-50">
                {achievement.icon}
              </div>
              <div className="opacity-70">
                <h3 className="font-bold text-indigo-700">{achievement.title}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
                <p className="text-xs text-indigo-600 mt-1">Keep practicing to earn this!</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Achievements
