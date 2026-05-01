"# TypeVocab - Kazakh Vocabulary Typing Practice

A modern web application for learning Kazakh vocabulary through typing practice. Built with Next.js and Tailwind CSS.

## Features

- **Minimal Clean UI**: Centered layout with modern rounded design
- **Dark Mode Friendly**: Optimized for dark theme
- **Responsive Design**: Works on all screen sizes
- **Real-time Feedback**: Visual cues for correct/incorrect answers
- **Progress Tracking**: Score, accuracy percentage, and streak counter
- **No Backend Required**: All data stored locally

## Vocabulary Categories

- **Greetings**: сәлем, рақмет, жақсы, etc.
- **School**: кітап, мектеп, оқушы, etc.
- **City**: қала, көше, транспорт, etc.
- **Food**: баз, сұз, май, etc.
- **Nature**: тұздық, су, күн, etc.
- **Animals**: мысық, қой, балық, etc.

## How to Use

1. The app displays a random Kazakh word
2. Type the word in the input field
3. Press Enter or click \"Check Answer\"
4. If correct: input clears, next word appears, score increases
5. Track your progress with score and accuracy metrics

## Tech Stack

- **Next.js 14**: React framework
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **React Hooks**: State management (useState, useEffect)

## Project Structure

\`\`\`
typevocab/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main application
├── src/
│   └── data/
│       └── words.js      # Vocabulary storage
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
\`\`\`

## Installation

\`\`\`bash
npm install
npm run dev
\`\`\`

## Available Scripts

- \`npm run dev\`: Start development server
- \`npm run build\`: Build for production
- \`npm run start\`: Start production server
- \`npm run lint\`: Run ESLint

## License

MIT
"