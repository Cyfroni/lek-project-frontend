import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"
import * as React from "react"
import Comments from "./Screens/Comments"
import Questions from "./Screens/Questions"

const Drawer = createDrawerNavigator()

function Navigation() {
  return (
    <Drawer.Navigator useLegacyImplementation initialRouteName="Questions">
      <Drawer.Screen
        name="Questions"
        component={Questions}
        options={{ drawerLabel: "Questions" }}
      />
      <Drawer.Screen
        name="Comments"
        component={Comments}
        options={{ drawerLabel: "Comments" }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}
