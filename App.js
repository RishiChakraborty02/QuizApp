import './global.css'
import { StatusBar } from "expo-status-bar";
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from "react-native";
import AuthNavigator from "./src/navigators/AuthNavigator";
import MainBottomTabNavigator from './src/navigators/MainBottomTabNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <AuthNavigator/> */}
      <MainBottomTabNavigator/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
