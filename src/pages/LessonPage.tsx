import React, { useState } from 'react'
import { PlusCircle, MinusCircle, X, Divide, BookOpen, ArrowLeft } from 'lucide-react'
import LessonCard from '../components/LessonCard'

interface LessonPageProps {
  theme: string
}

interface Lesson {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  completed: boolean
  content: React.ReactNode
}

const LessonPage: React.FC<LessonPageProps> = ({ theme }) => {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null)
  
  const lessons: Lesson[] = [
    {
      id: 'addition-basics',
      title: 'Addition Basics',
      description: 'Learn the fundamentals of adding numbers',
      icon: <PlusCircle size={24} />,
      completed: true,
      content: (
        <div>
          <h3 className="text-xl font-bold mb-4">Addition Basics</h3>
          
          <div className="mb-6">
            <p className="mb-4">Addition is putting things together and finding the total. When we add, we combine two or more numbers to find their sum.</p>
            
            <div className="bg-indigo-50 p-4 rounded-lg mb-4">
              <h4 className="font-bold mb-2">Example:</h4>
              <p>3 + 2 = 5</p>
              <p className="text-gray-600 mt-2">We have 3 apples and get 2 more. Now we have 5 apples in total.</p>
            </div>
            
            <p className="mb-4">Addition has some special properties:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Commutative Property:</strong> The order doesn't matter. 2 + 3 = 3 + 2</li>
              <li><strong>Associative Property:</strong> How you group numbers doesn't matter. (2 + 3) + 4 = 2 + (3 + 4)</li>
              <li><strong>Identity Property:</strong> Adding zero doesn't change a number. 5 + 0 = 5</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Tips for Addition:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Start by counting on your fingers for small numbers</li>
              <li>Learn to count forward from any number</li>
              <li>Practice adding 1, 2, and 10 to any number</li>
              <li>Look for pairs that make 10 (like 6+4 or 7+3)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'subtraction-basics',
      title: 'Subtraction Basics',
      description: 'Learn how to subtract numbers',
      icon: <MinusCircle size={24} />,
      completed: true,
      content: (
        <div>
          <h3 className="text-xl font-bold mb-4">Subtraction Basics</h3>
          
          <div className="mb-6">
            <p className="mb-4">Subtraction is taking away one number from another. When we subtract, we find the difference between two numbers.</p>
            
            <div className="bg-indigo-50 p-4 rounded-lg mb-4">
              <h4 className="font-bold mb-2">Example:</h4>
              <p>7 - 3 = 4</p>
              <p className="text-gray-600 mt-2">We have 7 cookies and eat 3 of them. Now we have 4 cookies left.</p>
            </div>
            
            <p className="mb-4">Subtraction can also be thought of as:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Taking Away:</strong> Removing a certain amount from a total</li>
              <li><strong>Finding the Difference:</strong> How much more one number is than another</li>
              <li><strong>Counting Back:</strong> Moving backward from a number</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Tips for Subtraction:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Practice counting backward</li>
              <li>Use objects to physically take away and count what's left</li>
              <li>Learn fact families (related addition and subtraction facts)</li>
              <li>For example: 7 - 3 = 4 is related to 4 + 3 = 7</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'multiplication-basics',
      title: 'Multiplication Basics',
      description: 'Learn how to multiply numbers',
      icon: <X size={24} />,
      completed: false,
      content: (
        <div>
          <h3 className="text-xl font-bold mb-4">Multiplication Basics</h3>
          
          <div className="mb-6">
            <p className="mb-4">Multiplication is repeated addition. It's a faster way to add the same number multiple times.</p>
            
            <div className="bg-indigo-50 p-4 rounded-lg mb-4">
              <h4 className="font-bold mb-2">Example:</h4>
              <p>3 × 4 = 12</p>
              <p className="text-gray-600 mt-2">This means 3 groups of 4, or 4 + 4 + 4 = 12</p>
              <p className="text-gray-600">It also means 4 groups of 3, or 3 + 3 + 3 + 3 = 12</p>
            </div>
            
            <p className="mb-4">Multiplication has important properties:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Commutative Property:</strong> The order doesn't matter. 3 × 4 = 4 × 3</li>
              <li><strong>Associative Property:</strong> How you group factors doesn't matter. (2 × 3) × 4 = 2 × (3 × 4)</li>
              <li><strong>Identity Property:</strong> Multiplying by 1 doesn't change a number. 5 × 1 = 5</li>
              <li><strong>Zero Property:</strong> Any number multiplied by 0 equals 0. 7 × 0 = 0</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Tips for Multiplication:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Start by learning the 2, 5, and 10 times tables</li>
              <li>Use skip counting to help remember multiplication facts</li>
              <li>Draw arrays (rows and columns) to visualize multiplication</li>
              <li>Practice a little bit every day to memorize the times tables</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'division-basics',
      title: 'Division Basics',
      description: 'Learn how to divide numbers',
      icon: <Divide size={24} />,
      completed: false,
      content: (
        <div>
          <h3 className="text-xl font-bold mb-4">Division Basics</h3>
          
          <div className="mb-6">
            <p className="mb-4">Division is sharing or grouping numbers equally. It's the opposite of multiplication.</p>
            
            <div className="bg-indigo-50 p-4 rounded-lg mb-4">
              <h4 className="font-bold mb-2">Example:</h4>
              <p>12 ÷ 3 = 4</p>
              <p className="text-gray-600 mt-2">This means if we share 12 items equally among 3 people, each person gets 4 items.</p>
              <p className="text-gray-600">It also means we can make 4 groups with 3 items in each group from a total of 12 items.</p>
            </div>
            
            <p className="mb-4">Division can be thought of in different ways:</p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Sharing Equally:</strong> Dividing a total into equal parts</li>
              <li><strong>Grouping:</strong> Finding how many equal groups can be made</li>
              <li><strong>Repeated Subtraction:</strong> How many times can we take away a number</li>
              <li><strong>Inverse of Multiplication:</strong> If 3 × 4 = 12, then 12 ÷ 3 = 4</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Tips for Division:</h4>
            <ul className="list-disc pl-5 space-y-2">
              <li>Use objects to practice sharing equally</li>
              <li>Learn the relationship between multiplication and division</li>
              <li>Practice division facts after learning multiplication tables</li>
              <li>Remember that division by zero is undefined</li>
            </ul>
          </div>
        </div>
      )
    },
  ]
  
  const selectedLessonData = lessons.find(lesson => lesson.id === selectedLesson)
  
  if (selectedLesson && selectedLessonData) {
    return (
      <div>
        <button 
          onClick={() => setSelectedLesson(null)}
          className="flex items-center text-indigo-600 mb-6 hover:text-indigo-800 transition-colors"
        >
          <ArrowLeft size={20} className="mr-1" />
          <span>Back to Lessons</span>
        </button>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          {selectedLessonData.content}
        </div>
      </div>
    )
  }
  
  return (
    <div>
      <div className="flex items-center mb-6">
        <BookOpen size={24} className="text-indigo-600 mr-3" />
        <h2 className="text-2xl font-bold">Math Lessons</h2>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            title={lesson.title}
            description={lesson.description}
            icon={lesson.icon}
            completed={lesson.completed}
            onClick={() => setSelectedLesson(lesson.id)}
            theme={theme}
          />
        ))}
      </div>
    </div>
  )
}

export default LessonPage
