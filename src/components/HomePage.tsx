import React, { useState } from 'react'
import { Calculator, BookOpen, Award, ArrowRight } from 'lucide-react'

interface HomePageProps {
  onStartLearning: (name: string, age: number) => void
  isProfileSet: boolean
  userName: string
}

const HomePage: React.FC<HomePageProps> = ({ onStartLearning, isProfileSet, userName }) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState<number | string>('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!name.trim()) {
      setError('Please enter your name')
      return
    }
    
    const ageNum = Number(age)
    if (isNaN(ageNum) || ageNum < 4 || ageNum > 12) {
      setError('Please enter a valid age between 4 and 12')
      return
    }
    
    onStartLearning(name, ageNum)
    setError('')
  }

  const features = [
    {
      icon: <Calculator size={40} className="text-indigo-600" />,
      title: "Fun Math Practice",
      description: "Interactive exercises that make learning math enjoyable with colorful visuals and instant feedback."
    },
    {
      icon: <BookOpen size={40} className="text-pink-500" />,
      title: "Step-by-Step Lessons",
      description: "Easy-to-follow lessons that break down math concepts into simple, understandable steps."
    },
    {
      icon: <Award size={40} className="text-yellow-500" />,
      title: "Rewards & Achievements",
      description: "Earn stars, badges, and unlock fun characters as you master new math skills."
    }
  ]

  return (
    <div className="flex flex-col space-y-12">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 leading-tight">
            {isProfileSet 
              ? `Welcome back, ${userName}!` 
              : "Make Math Fun and Easy for Your Child"}
          </h1>
          <p className="text-lg text-gray-600">
            Math Buddy helps children ages 4-12 build strong math foundations through interactive games, 
            engaging lessons, and personalized practice.
          </p>
          
          {!isProfileSet ? (
            <div className="card max-w-md">
              <h3 className="text-xl font-bold text-indigo-700 mb-4">Let's Get Started!</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-field"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-gray-700 mb-1">Your Age</label>
                  <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="input-field"
                    placeholder="Enter your age (4-12)"
                    min="4"
                    max="12"
                  />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="btn-primary w-full flex items-center justify-center">
                  Start Learning <ArrowRight size={18} className="ml-2" />
                </button>
              </form>
            </div>
          ) : (
            <div className="flex space-x-4">
              <button className="btn-primary">Continue Learning</button>
              <button className="btn-secondary">Try New Lessons</button>
            </div>
          )}
        </div>
        
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1622&q=80" 
            alt="Happy children learning math" 
            className="rounded-2xl shadow-xl max-w-full h-auto"
          />
        </div>
      </section>
      
      {/* Features Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-12">Why Kids Love Math Buddy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-indigo-50 rounded-full">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-indigo-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-indigo-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-indigo-800 mb-8">What Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card">
            <p className="italic text-gray-600 mb-4">
              "Math Buddy transformed my daughter's relationship with math. She used to dread math homework, 
              but now she asks to practice on Math Buddy every day!"
            </p>
            <p className="font-semibold text-indigo-700">- Sarah, mother of 8-year-old Emma</p>
          </div>
          <div className="card">
            <p className="italic text-gray-600 mb-4">
              "The visual approach and immediate feedback have helped my son understand math concepts 
              that he struggled with in school. His confidence has grown tremendously."
            </p>
            <p className="font-semibold text-indigo-700">- Michael, father of 10-year-old James</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
