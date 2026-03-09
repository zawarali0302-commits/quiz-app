import { View, Text, Pressable } from "react-native"
import { useCallback, useEffect, useRef, useState } from "react"
import { router } from "expo-router"
import { Question, questions } from "./data/questions"

export default function Quiz() {

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [timeLeft, setTimeLeft] = useState(10)
  const isAnsweredRef = useRef(false)

  const question: Question = questions[currentQuestion]

  const goToNextQuestion = useCallback((nextScore: number) => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      router.push({
        pathname: "/result",
        params: { score: String(nextScore) }
      })
    }
  }, [currentQuestion])

  const handleAnswer = (option: string) => {
    if (isAnsweredRef.current) {
      return
    }
    isAnsweredRef.current = true

    const isCorrect = option === question.correctAnswer
    const nextScore = isCorrect ? score + 1 : score

    if (isCorrect) {
      setScore(nextScore)
    }

    goToNextQuestion(nextScore)
  }

  useEffect(() => {
    isAnsweredRef.current = false
    setTimeLeft(10)

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          if (!isAnsweredRef.current) {
            isAnsweredRef.current = true
            goToNextQuestion(score)
          }
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [currentQuestion, score, goToNextQuestion])

  return (
    <View style={{ flex:1, padding:20, justifyContent:"center" }}>

      <Text style={{ fontSize:18, marginBottom:10 }}>
        Question {currentQuestion + 1} / {questions.length}
      </Text>

      <Text style={{ fontSize:16, marginBottom:12, color:"#b00020" }}>
        Time left: {timeLeft}s
      </Text>

      <Text style={{ fontSize:22, marginBottom:20 }}>
        {question.question}
      </Text>

      {question.options.map((option, index) => (
        <Pressable
          key={index}
          style={{
            backgroundColor:"#eee",
            padding:15,
            marginBottom:10,
            borderRadius:8
          }}
          onPress={() => handleAnswer(option)}
        >
          <Text>{option}</Text>
        </Pressable>
      ))}

    </View>
  )
}
