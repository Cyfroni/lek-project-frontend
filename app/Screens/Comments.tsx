import React from "react"
import { Text, View } from "react-native"

function Comment({ author, content, date }) {
  return (
    <View>
      <Text>{content}</Text>
      <View style={{ flexDirection: "row" }}>
        <Text>{author}</Text>
        <Text>{date}</Text>
      </View>
    </View>
  )
}

export default function Comments() {
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Comment author="Karol" content="123qweasdzxc" date="12.13.14" />
      <Comment author="Kohan" content="345ertfdg" date="15.13.14" />
      <Comment author="Jakub" content="456rtyfgh" date="19.13.14" />
    </View>
  )
}
