import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { HomeScreen } from '../screens/HomeScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName='Home' screenOptions={
      ({route})=>({tabBarIcon:({color,size})=>{
          let inconName
          if (route.name == "Home"){
            inconName = "home-outline"
          }else if (route.name == "User"){
            inconName = "person-outline"
          }
          return <Ionicons name={inconName} size={size} color={color}/>

      }})
    }>
      <Tab.Screen name="Home" component={HomeScreen} options={{}} />
    </Tab.Navigator>
  )
}

export const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen name='MainTabs' component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

