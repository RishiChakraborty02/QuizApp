import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Layout from "../screens/results/Layout";
import ViewResult from "../screens/results/ViewResult";
const Stack = createStackNavigator();
const ResultsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="LAYOUT" component={Layout} />
      <Stack.Screen name="VIEWRESULT" component={ViewResult} />
    </Stack.Navigator>
  );
};

export default ResultsStackNavigator;

const styles = StyleSheet.create({});
