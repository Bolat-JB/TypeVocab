// Kazakh vocabulary grouped by categories
export const words = {
  greetings: [
    'сәлем',
    'сәлеметсіз бе',
    'рақмет',
    'жақсы',
    'қалайсыз',
    'әлем',
  ],
  school: [
    'кітап',
    'мектеп',
    'балабақша',
    'сынып',
    'оқушы',
    'мұғалім',
    'тақырып',
    'сабақ',
  ],
  city: [
    'қала',
    'аудан',
    'көше',
    'үй',
    'жол',
    'транспорт',
    'автобус',
    'бақша',
    'жұмыс',
    'кеңсе', // Changed from 'офис' to native 'кеңсе'
  ],
  food: [
    'нан',   // Bread
    'тұз',   // Salt
    'қант',
    'сүт',
    'айран',
    'қымыз',
    'май',   // Butter/Oil
    'ет',
    'тәтті',
    'ас',
  ],
  nature: [
    'дала',  // Steppe
    'жер',
    'су',
    'күн',
    'ай',
    'бұлт',  // Cloud
    'жаңбыр',
    'орман', // Forest
    'ағаш',
    'гүл',
  ],
  animals: [
    'мысық',
    'ит',    // Fixed spelling
    'қой',
    'жылқы',
    'балық',
    'құс',
    'қасқыр',
    'үйрек', // Fixed spelling
    'құрт',
    'бақа',  // Frog
  ],
};

// Get all words as a flat array
export const allWords = Object.values(words).flat();

// Get a random word from all categories
export const getRandomWord = () => {
  const flatWords = Object.values(words).flat();
  return flatWords[Math.floor(Math.random() * flatWords.length)];
};