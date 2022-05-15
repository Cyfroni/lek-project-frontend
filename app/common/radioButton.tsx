import React from "react"
import { View, Text } from "react-native"

export default function RadioButton(props) {
  return (
    <View style={{ flexDirection: "row", margin: 5, alignItems: "center" }}>
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
            marginRight: 5,
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
      <View>
        <Text>{props.children}</Text>
      </View>
    </View>
  )
}
