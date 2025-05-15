import React, { useEffect, useState } from 'react'

interface ConfettiPiece {
  id: number
  x: number
  y: number
  color: string
  size: number
  speed: number
  angle: number
  rotation: number
}

const Confetti: React.FC = () => {
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])
  
  useEffect(() => {
    // Generate confetti pieces
    const colors = ['#FF5252', '#FFD740', '#64FFDA', '#448AFF', '#E040FB', '#69F0AE']
    const newConfetti: ConfettiPiece[] = []
    
    for (let i = 0; i < 100; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100, // percentage across screen
        y: -10 - Math.random() * 10, // start above viewport
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 5 + Math.random() * 10,
        speed: 1 + Math.random() * 3,
        angle: Math.random() * 360,
        rotation: Math.random() * 360
      })
    }
    
    setConfetti(newConfetti)
    
    // Clean up
    return () => {
      setConfetti([])
    }
  }, [])
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animation: `fall ${3 / piece.speed}s linear forwards`,
            opacity: 0.8
          }}
        />
      ))}
    </div>
  )
}

export default Confetti
