import React, { useState } from "react"
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const questions = [
  {
    question: "what is love?",
    answer1: "baby baby",
    answer2: "hurt me",
    answer3: "baby hurt me",
    answer4: "baby dont hurt me",
    answer5: "malaka",
  },
  {
    question: "How do you protest?",
    answer1: "In the city center",
    answer2: "U lock down in a building",
    answer3: "Hearsay!",
    answer4: "Malaka!",
    answer5: "Covid.",
  },
  {
    question: "Twitter?",
    answer1: "Elon",
    answer2: "Musk",
    answer3: "Elon Musk",
    answer4: "Musk Elon",
    answer5: "Amber Heard",
  },
]

function RadioButton(props) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View
        style={[
          {
            height: 24,
            width: 24,
            borderRadius: 12,
            borderWidth: 2,
            borderColor: "#000",
            alignItems: "center",
            justifyContent: "center",
          },
          props.style,
        ]}
      >
        {props.selected ? (
          <View
            style={{
              height: 12,
              width: 12,
              borderRadius: 6,
              backgroundColor: "#000",
            }}
          />
        ) : null}
      </View>
      <Text>{props.children}</Text>
    </View>
  )
}

export default function App() {
  const [selected, setSelected] = useState(-1)
  const [questionNumber, setQuestionNumber] = useState(0)

  const question = questions[questionNumber]
  const answers = [
    question.answer1,
    question.answer2,
    question.answer3,
    question.answer4,
    question.answer5,
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
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
