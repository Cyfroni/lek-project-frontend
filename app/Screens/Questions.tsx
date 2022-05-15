import React, { useEffect, useState } from "react"
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import questionsApi from "../api/questions"
import RadioButton from "../common/radioButton"
import useApi from "../hooks/useApi"

export default function Questions() {
  const [selected, setSelected] = useState(-1)
  const [questionNumber, setQuestionNumber] = useState(0)

  const getQuestionsApi = useApi(questionsApi.getQuestions)

  useEffect(() => {
    getQuestionsApi.request()
  }, [])

  if (getQuestionsApi.loading) return null

  const questions = getQuestionsApi.data

  const question = questions[questionNumber]
  const answers = [
    question?.answer1,
    question?.answer2,
    question?.answer3,
    question?.answer4,
    question?.answer5,
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question?.question}</Text>
      <View style={styles.answersContainer}>
        {answers.map((value, index) => (
          <TouchableOpacity onPress={() => setSelected(index)} key={index}>
            <RadioButton selected={selected === index}>
              {index}. {value}
            </RadioButton>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.footer}>
        <Button
          title="Previous"
          onPress={() => {
            setQuestionNumber(questionNumber - 1)
            setSelected(-1)
          }}
          disabled={questionNumber === 0}
        />
        <Button
          title="Next"
          onPress={() => {
            setQuestionNumber(questionNumber + 1)
            setSelected(-1)
          }}
          disabled={questionNumber === questions.length - 1 || selected === -1}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  answersContainer: {
    alignItems: "flex-start",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  question: {
    fontWeight: "700",
  },
  footer: {
    flexDirection: "row",
  },
})
