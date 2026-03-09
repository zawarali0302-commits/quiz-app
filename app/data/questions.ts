export type Question = {
  id: number
  question: string
  options: string[]
  correctAnswer: string
}

export const questions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    id: 2,
    question: "Which language runs in a browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correctAnswer: "JavaScript"
  },
  {
    id: 3,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets"
  }
];