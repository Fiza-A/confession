const memory = (filename) => `${import.meta.env.BASE_URL}memories/${filename}`;

export const loveConfig = {
  // Change these values to personalize the whole website.
  loverName: "My Love",
  myName: "Forever Yours",
  secretCode: "Taifa@1107",
  song: {
    title: "Tera Hone Laga Hoon",
    artists: "Atif Aslam, Alisha Chinai and Pritam",
    src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/c7/b2/bf/c7b2bf0e-b5f9-f895-9c76-1b87d9a62a62/mzaf_7047326532739611933.plus.aac.p.m4a",
  },
  loveLetterText:
    "My love, every moment with you feels like a beautiful dream. You are my peace, my happiness, my favorite thought, and the reason my heart smiles a little more every day. This website is just a small piece of what I feel for you, but my love for you is endless.",
  featuredImages: {
    hero: memory("memory-16.jpeg"),
    letter: memory("memory-14.jpeg"),
    surprise: memory("memory-12.jpeg"),
    final: memory("memory-02.jpeg"),
  },
  memoryImages: [
    memory("memory-01.jpeg"),
    memory("memory-02.jpeg"),
    memory("memory-03.jpeg"),
    memory("memory-04.jpeg"),
    memory("memory-05.jpeg"),
    memory("memory-06.jpeg"),
    memory("memory-07.jpeg"),
    memory("memory-08.jpeg"),
    memory("memory-09.jpeg"),
    memory("memory-10.jpeg"),
    memory("memory-11.jpeg"),
    memory("memory-12.jpeg"),
    memory("memory-13.jpeg"),
    memory("memory-14.jpeg"),
    memory("memory-15.jpeg"),
    memory("memory-16.jpeg"),
    memory("memory-17.jpeg"),
    memory("memory-18.jpeg"),
    memory("memory-19.jpeg"),
    memory("memory-20.jpeg"),
  ],
  memoryCaptions: [
    "Eyes That Found Home",
    "The Day We Held Close",
    "A Vintage Kind of Love",
    "Little Kiss Faces",
    "A Kiss For The Camera",
    "Soft Morning Us",
    "Adventure Together",
    "Silly Little Forever",
    "Tiny Close Moment",
    "Promise Knuckles",
    "Dreamy Cartoon Us",
    "Two Rings, One Story",
    "Under The Green Light",
    "Cheek Kiss Forever",
    "My Favorite Seat",
    "One Perfect Kiss",
    "A Quiet Garden Day",
    "Mood: You",
    "Kept Close Always",
    "Matching Hearts",
  ],
  reasonsILoveYou: [
    "Your smile makes everything better.",
    "You make ordinary days feel magical.",
    "You understand me like no one else.",
    "Your kindness makes my heart soft.",
    "You are my safest place.",
    "Loving you feels like home.",
  ],
  timelineEvents: [
    {
      title: "The Day We Met",
      description: "A simple day became the beginning of my favorite story.",
    },
    {
      title: "The First Conversation",
      description: "Your words stayed with me longer than I expected.",
    },
    {
      title: "The First Smile I Could Not Forget",
      description: "That smile quietly became one of my happiest memories.",
    },
    {
      title: "The Moment You Became Special",
      description: "Somewhere between little talks and shared laughter, my heart chose you.",
    },
    {
      title: "Today, Tomorrow, Forever",
      description: "Every version of my future feels brighter with you in it.",
    },
  ],
  secretMessage:
    "Surprise, my love. You are not just someone special to me. You are my favorite part of life. I choose you today, tomorrow, and in every version of forever.",
  finalMessage:
    "I may not have the whole world to give you, but I promise to give you my whole heart.",
};
