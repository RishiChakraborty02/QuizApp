import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Layout from '../screens/home/Layout'
import GiveTest from '../screens/home/GiveTest'
import CreateTest from '../screens/home/CreateTest'
const Stack = createStackNavigator()

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="LAYOUT" component={Layout} />
      <Stack.Screen name="GIVETEST" component={GiveTest} />
      <Stack.Screen name="CREATETEST" component={CreateTest} />
      
    </Stack.Navigator>

  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})