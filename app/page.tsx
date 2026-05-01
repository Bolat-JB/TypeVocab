'use client'

import { useState, useEffect, useRef } from 'react'
import { words, allWords } from '../src/data/words'

export default function Home() {
  const [currentWord, setCurrentWord] = useState('')
  const [userInput, setUserInput] = useState('')
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)
  const [correctStreak, setCorrectStreak] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)
  const [isWrong, setIsWrong] = useState(false)
  
  // NEW: Category State
  const [selectedCategory, setSelectedCategory] = useState('all')
  const inputRef = useRef<HTMLInputElement>(null)

  // NEW: Function to get a word based on the selected category
  const pickNewWord = (category: string) => {
    const wordList = category === 'all' ? allWords : words[category as keyof typeof words]
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)]
    setCurrentWord(randomWord)
  }

  // Pick a word when the app loads OR when the category changes
  useEffect(() => {
    pickNewWord(selectedCategory)
    setUserInput('')
    setIsCorrect(false)
    setIsWrong(false)
  }, [selectedCategory])

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
        pickNewWord(selectedCategory)
        setIsCorrect(false)
        inputRef.current?.focus()
      }, 500)
    } else {
      setCorrectStreak(0)
      setIsWrong(true)
      setIsCorrect(false)
    }
  }

  // NEW: Skip function
  const skipWord = () => {
    setCorrectStreak(0) // Reset streak on skip
    pickNewWord(selectedCategory)
    setUserInput('')
    setIsWrong(false)
    inputRef.current?.focus()
  }

  const accuracy = attempts > 0 ? Math.round((score / attempts) * 100) : 0
  const categories = ['all', 'greetings', 'school', 'city', 'food', 'nature', 'animals']

  return (
    <div className="min-h-screen bg-bg flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-2xl">
        
        {/* Header Stats */}
        <div className="flex justify-between items-center mb-6 px-4 gap-4">
          <div className="flex-1 bg-bg-card rounded-2xl px-6 py-4 shadow-lg border border-gray-800 text-center">
            <div className="text-sm text-fg-muted uppercase tracking-wider mb-1">Score</div>
            <div className="text-3xl font-bold text-accent">{score}</div>
          </div>
          <div className="flex-1 bg-bg-card rounded-2xl px-6 py-4 shadow-lg border border-gray-800 text-center">
            <div className="text-sm text-fg-muted uppercase tracking-wider mb-1">Accuracy</div>
            <div className="text-3xl font-bold" style={{ color: accuracy >= 70 ? '#10b981' : accuracy >= 50 ? '#f59e0b' : '#ef4444' }}>
              {accuracy}%
            </div>
          </div>
          <div className="flex-1 bg-bg-card rounded-2xl px-6 py-4 shadow-lg border border-gray-800 text-center">
            <div className="text-sm text-fg-muted uppercase tracking-wider mb-1">Streak</div>
            <div className="text-3xl font-bold text-accent">{correctStreak}</div>
          </div>
        </div>

        {/* NEW: Category Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 border
                ${selectedCategory === cat 
                  ? 'bg-accent border-accent text-white shadow-lg shadow-green-500/20' 
                  : 'bg-bg-card border-gray-700 text-fg-muted hover:border-gray-500 hover:text-fg'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Main interactive card */}
        <div className="bg-bg-card rounded-3xl p-8 shadow-2xl border border-gray-800">
          
          <div className="text-center mb-8">
            <p className="text-fg-muted text-sm uppercase tracking-wider mb-3">
              Translate to Kazakh
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-fg tracking-tight break-all">
              {currentWord}
            </h1>
          </div>

          <div className="relative mb-4">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Type your answer here..."
              className={`w-full bg-bg border-2 rounded-2xl px-6 py-5 text-xl text-center text-fg placeholder-gray-600 focus:outline-none transition-all duration-300 
                ${isCorrect ? 'border-accent bg-green-900/20' : ''}
                ${isWrong ? 'border-danger bg-red-900/20' : ''}
                ${!isCorrect && !isWrong ? 'border-gray-700 hover:border-gray-600 focus:border-accent focus:bg-gray-900' : ''}
              `}
              autoFocus
            />
          </div>

          <div className="text-center h-8 mb-4">
            {isCorrect && <span className="text-accent text-lg font-medium">✓ Perfect!</span>}
            {isWrong && <span className="text-danger text-lg font-medium">Not quite. Try again!</span>}
          </div>

          {/* Action buttons */}
          <div className="flex gap-4">
            <button
              onClick={skipWord}
              className="flex-1 bg-gray-800 hover:bg-gray-700 text-fg font-medium py-4 px-8 rounded-2xl text-lg transition-all duration-300"
            >
              Skip Word
            </button>
            <button
              onClick={checkAnswer}
              className="flex-1 bg-accent hover:bg-accent-hover text-white font-semibold py-4 px-8 rounded-2xl text-lg transition-all duration-300 shadow-lg shadow-green-500/20"
            >
              Check Answer
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}