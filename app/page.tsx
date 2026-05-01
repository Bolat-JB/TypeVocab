'use client'

import { useState, useEffect, useRef } from 'react'
import { getRandomWord } from '../src/data/words'

export default function Home() {
  const [currentWord, setCurrentWord] = useState('')
  const [userInput, setUserInput] = useState('')
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [correctStreak, setCorrectStreak] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isWrong, setIsWrong] = useState(false)
  
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setCurrentWord(getRandomWord())
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUserInput(value)

    if (isCorrect) setIsCorrect(false)
    if (isWrong) setIsWrong(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      checkAnswer()
    }
  }

  const checkAnswer = () => {
    if (userInput.trim() === '') return

    setAttempts(attempts + 1)

    if (userInput.trim().toLowerCase() === currentWord.toLowerCase()) {
      setScore(score + 1)
      setCorrectStreak(correctStreak + 1)
      setIsCorrect(true)
      setIsWrong(false)
      setUserInput('')

      setTimeout(() => {
        setCurrentWord(getRandomWord())
        setIsCorrect(false)
        inputRef.current?.focus()
      }, 500)
    } else {
      setCorrectStreak(0)
      setIsWrong(true)
      setIsCorrect(false)
    }
  }

  const accuracy = attempts > 0 ? Math.round((score / attempts) * 100) : 0

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        
        {/* Header with score and accuracy */}
        <div className="flex justify-between items-center mb-8 px-4 gap-4">
          <div className="flex-1 bg-bg-card rounded-2xl px-6 py-4 shadow-lg border border-gray-800 text-center">
            <div className="text-sm text-fg-muted">Score</div>
            <div className="text-3xl font-bold text-accent">{score}</div>
          </div>
          <div className="flex-1 bg-bg-card rounded-2xl px-6 py-4 shadow-lg border border-gray-800 text-center">
            <div className="text-sm text-fg-muted">Accuracy</div>
            <div className="text-3xl font-bold" style={{ color: accuracy >= 70 ? '#10b981' : accuracy >= 50 ? '#f59e0b' : '#ef4444' }}>
              {accuracy}%
            </div>
          </div>
          <div className="flex-1 bg-bg-card rounded-2xl px-6 py-4 shadow-lg border border-gray-800 text-center">
            <div className="text-sm text-fg-muted">Streak</div>
            <div className="text-3xl font-bold text-accent">{correctStreak}</div>
          </div>
        </div>

        {/* Main card */}
        <div className="bg-bg-card rounded-3xl p-8 shadow-2xl border border-gray-800">
          
          {/* Word display */}
          <div className="text-center mb-8">
            <h1 className="text-6xl md:text-7xl font-bold text-fg tracking-tight break-all" style={{ fontFamily: 'Noto Sans, system-ui, sans-serif' }}>
              {currentWord}
            </h1>
          </div>

          {/* Input field */}
          <div className="relative mb-4">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type the word above..."
              className={`w-full bg-bg border-2 rounded-2xl px-6 py-5 text-xl text-fg placeholder-fg-muted focus:outline-none transition-all duration-300 
                ${isCorrect ? 'border-accent bg-green-900/30' : ''}
                ${isWrong ? 'border-danger bg-red-900/30' : ''}
                ${!isCorrect && !isWrong ? 'border-gray-700 hover:border-gray-600 focus:border-accent' : ''}
              `}
              autoFocus
            />
            {isCorrect && (
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-accent">✓</span>
            )}
            {isWrong && (
              <span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-accent">⟳</span>
            )}
          </div>

          {/* Status message */}
          <div className="text-center h-8">
            {isCorrect && (
              <span className="text-accent text-lg font-medium">
                ✓ Correct!
              </span>
            )}
            {isWrong && (
              <span className="text-danger text-lg font-medium">
                Try again. Check your spelling!
              </span>
            )}
          </div>

          {/* Action button */}
          <button
            onClick={checkAnswer}
            className="w-full mt-4 bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Check Answer
          </button>
        </div>

        {/* Progress info */}
        <div className="text-center mt-6 text-fg-muted text-sm">
          Press Enter or click the button to check your answer
        </div>
      </div>
    </div>
  )
}