import React, { useState } from 'react'
import { BookOpen, ChevronRight, Star, Play } from 'lucide-react'

interface MathLessonsProps {
  userAge: number
}

interface Lesson {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  ageRange: string
  imageUrl: string
  completed?: boolean
}

const MathLessons: React.FC<MathLessonsProps> = ({ userAge }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  // Generate lessons based on user age
  const generateLessons = (): Lesson[] => {
    const allLessons: Lesson[] = [
      {
        id: 'counting-1-10',
        title: 'Counting Numbers 1-10',
        description: 'Learn to count from 1 to 10 with fun visual aids and interactive exercises.',
        difficulty: 'beginner',
        ageRange: '4-6',
        imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        completed: true
      },
      {
        id: 'counting-1-20',
        title: 'Counting Numbers 1-20',
        description: 'Extend your counting skills up to 20 with engaging activities.',
        difficulty: 'beginner',
        ageRange: '4-6',
        imageUrl: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        completed: userAge > 5
      },
      {
        id: 'basic-addition',
        title: 'Basic Addition',
        description: 'Learn to add numbers up to 10 with visual representations and fun games.',
        difficulty: 'beginner',
        ageRange: '5-7',
        imageUrl: 'https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        completed: userAge > 6
      },
      {
        id: 'basic-subtraction',
        title: 'Basic Subtraction',
        description: 'Master taking away numbers with interactive examples and practice problems.',
        difficulty: 'beginner',
        ageRange: '5-7',
        imageUrl: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        completed: userAge > 6
      },
      {
        id: 'place-value',
        title: 'Place Value',
        description: 'Understand ones, tens, and hundreds with colorful blocks and visual aids.',
        difficulty: 'intermediate',
        ageRange: '6-8',
        imageUrl: 'https://images.unsplash.com/photo-1453733190371-0a9bedd82893?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        completed: userAge > 7
      },
      {
        id: 'addition-within-100',
        title: 'Addition Within 100',
        description: 'Learn strategies for adding larger numbers with regrouping.',
        difficulty: 'intermediate',
        ageRange: '7-9',
        imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        completed: false
      },
      {
        id: 'subtraction-within-100',
        title: 'Subtraction Within 100',
        description: 'Master subtraction with borrowing through step-by-step examples.',
        difficulty: 'intermediate',
        ageRange: '7-9',
        imageUrl: 'https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        completed: false
      },
      {
        id: 'intro-multiplication',
        title: 'Introduction to Multiplication',
        description: 'Learn multiplication as repeated addition with visual models.',
        difficulty: 'intermediate',
        ageRange: '8-10',
        imageUrl: 'https://images.unsplash.com/photo-1635070036297-e9c4a5ce974e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        completed: false
      },
      {
        id: 'multiplication-tables',
        title: 'Multiplication Tables',
        description: 'Master multiplication facts from 1-10 with memory techniques and games.',
        difficulty: 'advanced',
        ageRange: '8-10',
        imageUrl: 'https://images.unsplash.com/photo-1632571401005-458e9d244591?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        completed: false
      },
      {
        id: 'intro-division',
        title: 'Introduction to Division',
        description: 'Understand division as sharing and grouping with interactive examples.',
        difficulty: 'advanced',
        ageRange: '9-11',
        imageUrl: 'https://images.unsplash.com/photo-1600493033157-eed3fbe95d96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        completed: false
      },
      {
        id: 'fractions-intro',
        title: 'Introduction to Fractions',
        description: 'Learn about parts of a whole with visual models and real-life examples.',
        difficulty: 'advanced',
        ageRange: '9-11',
        imageUrl: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        completed: false
      },
      {
        id: 'decimals-intro',
        title: 'Introduction to Decimals',
        description: 'Connect fractions and decimals with place value understanding.',
        difficulty: 'advanced',
        ageRange: '10-12',
        imageUrl: 'https://images.unsplash.com/photo-1564053489984-317bbd824340?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
        completed: false
      }
    ];
    
    // Filter lessons based on age appropriateness
    return allLessons.filter(lesson => {
      const [minAge, maxAge] = lesson.ageRange.split('-').map(Number);
      return userAge >= minAge - 1 && userAge <= maxAge + 1;
    });
  };
  
  const lessons = generateLessons();
  
  const filteredLessons = selectedCategory === 'all' 
    ? lessons 
    : lessons.filter(lesson => lesson.difficulty === selectedCategory);
  
  const completedCount = lessons.filter(lesson => lesson.completed).length;
  const completionPercentage = Math.round((completedCount / lessons.length) * 100);
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-indigo-800">Math Lessons</h1>
        <div className="flex items-center space-x-2 bg-indigo-100 px-4 py-2 rounded-full">
          <span className="font-semibold text-indigo-700">Progress: {completionPercentage}%</span>
        </div>
      </div>
      
      <div className="card mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-indigo-700">Recommended for Your Age</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full ${selectedCategory === 'all' 
                ? 'bg-indigo-500 text-white' 
                : 'bg-gray-200 text-gray-700'}`}
            >
              All
            </button>
            <button 
              onClick={() => setSelectedCategory('beginner')}
              className={`px-4 py-2 rounded-full ${selectedCategory === 'beginner' 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-200 text-gray-700'}`}
            >
              Beginner
            </button>
            <button 
              onClick={() => setSelectedCategory('intermediate')}
              className={`px-4 py-2 rounded-full ${selectedCategory === 'intermediate' 
                ? 'bg-yellow-500 text-white' 
                : 'bg-gray-200 text-gray-700'}`}
            >
              Intermediate
            </button>
            <button 
              onClick={() => setSelectedCategory('advanced')}
              className={`px-4 py-2 rounded-full ${selectedCategory === 'advanced' 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-200 text-gray-700'}`}
            >
              Advanced
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredLessons.map((lesson) => (
            <div key={lesson.id} className="card hover:shadow-xl transition-all duration-300">
              <div className="flex">
                <img 
                  src={lesson.imageUrl} 
                  alt={lesson.title} 
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-indigo-700">{lesson.title}</h3>
                    {lesson.completed && (
                      <Star size={20} className="text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{lesson.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      lesson.difficulty === 'beginner' ? 'bg-green-100 text-green-700' :
                      lesson.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {lesson.difficulty.charAt(0).toUpperCase() + lesson.difficulty.slice(1)} • Ages {lesson.ageRange}
                    </span>
                    <button className="flex items-center text-indigo-600 hover:text-indigo-800">
                      <Play size={16} className="mr-1" />
                      <span className="text-sm font-semibold">Start</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="card bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="flex items-center">
          <div className="mr-6">
            <BookOpen size={48} className="text-indigo-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-indigo-700 mb-2">Learning Path</h3>
            <p className="text-gray-600">
              Our lessons are designed to build on each other. Complete the beginner lessons 
              before moving to intermediate and advanced topics for the best learning experience.
            </p>
            <button className="mt-4 flex items-center text-indigo-600 hover:text-indigo-800 font-semibold">
              View Full Curriculum <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MathLessons
