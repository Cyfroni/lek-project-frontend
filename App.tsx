import { MaterialCommunityIcons } from "@expo/vector-icons"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import * as React from "react"
import Comments from "./app/Screens/Comments"
import Questions from "./app/Screens/Questions"

const Tab = createBottomTabNavigator()

function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName="Questions">
      <Tab.Screen
        name="Questions"
        component={Questions}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="cloud-question" size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Comments"
        component={Comments}
        options={{
          tabBarIcon: ({ size }) => (
            <MaterialCommunityIcons name="comment" size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}
