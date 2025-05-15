import React from 'react'
import { Award, Star, Zap, Trophy, Target, Medal, Crown } from 'lucide-react'
import AchievementCard from '../components/AchievementCard'

interface AchievementsPageProps {
  theme: string
}

const AchievementsPage: React.FC<AchievementsPageProps> = ({ theme }) => {
  const achievements = [
    {
      title: 'First Steps',
      description: 'Complete your first math problem',
      icon: <Star size={24} />,
      unlocked: true,
      progress: 1,
      total: 1
    },
    {
      title: 'Problem Solver',
      description: 'Solve 10 math problems',
      icon: <Zap size={24} />,
      unlocked: true,
      progress: 10,
      total: 10
    },
    {
      title: 'Math Apprentice',
      description: 'Solve 50 math problems',
      icon: <Trophy size={24} />,
      unlocked: false,
      progress: 15,
      total: 50
    },
    {
      title: 'Addition Master',
      description: 'Solve 20 addition problems correctly',
      icon: <Target size={24} />,
      unlocked: false,
      progress: 12,
      total: 20
    },
    {
      title: 'Subtraction Whiz',
      description: 'Solve 20 subtraction problems correctly',
      icon: <Medal size={24} />,
      unlocked: false,
      progress: 8,
      total: 20
    },
    {
      title: 'Multiplication Explorer',
      description: 'Solve 20 multiplication problems correctly',
      icon: <Crown size={24} />,
      unlocked: false,
      progress: 3,
      total: 20
    },
    {
      title: 'Division Novice',
      description: 'Solve 20 division problems correctly',
      icon: <Award size={24} />,
      unlocked: false,
      progress: 0,
      total: 20
    },
    {
      title: 'Perfect Streak',
      description: 'Get 10 correct answers in a row',
      icon: <Zap size={24} />,
      unlocked: false,
      progress: 5,
      total: 10
    }
  ]
  
  return (
    <div>
      <div className="flex items-center mb-6">
        <Award size={24} className="text-indigo-600 mr-3" />
        <h2 className="text-2xl font-bold">Achievements</h2>
      </div>
      
      <div className="mb-6 p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Your Progress</h3>
            <p>You've unlocked 2 out of 8 achievements!</p>
          </div>
          <div className="text-4xl font-bold">
            2/8
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            title={achievement.title}
            description={achievement.description}
            icon={achievement.icon}
            unlocked={achievement.unlocked}
            progress={achievement.progress}
            total={achievement.total}
            theme={theme}
          />
        ))}
      </div>
    </div>
  )
}

export default AchievementsPage
