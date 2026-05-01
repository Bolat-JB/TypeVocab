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
    'офис',
  ],
  food: [
    'бас',
    'сұз',
    'қант',
    'сүт',
    'айран',
    'қымыз',
    'мая',
    'ет',
    'тәтті',
    'ас',
  ],
  nature: [
    'тұздық',
    'жер',
    'су',
    'күн',
    'ай',
    'бұлқырау',
    'жаңбыр',
    'қышқыл',
    'ағаш',
    'гүл',
  ],
  animals: [
    'мысық',
    'ыт',
    'қой',
    'жылқы',
    'балық',
    'құс',
    'қасқыр',
    'үйлек',
    'құрт',
    'жалаңай',
  ],
};

// Get all words as a flat array
export const allWords = Object.values(words).flat();

// Get a random word from all categories
export const getRandomWord = () => {
  const flatWords = Object.values(words).flat();
  return flatWords[Math.floor(Math.random() * flatWords.length)];
};
