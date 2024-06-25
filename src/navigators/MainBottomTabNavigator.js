import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import Layout from "../screens/profile/Layout";
import HomeStackNavigator from "./HomeStackNavigator";
import ResultsStackNavigator from "./ResultsStackNavigator";
import ProfileStackNavigator from "./ProfileStackNavigator";

const Tab = createBottomTabNavigator();

const MainBottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HOME"
          component={HomeStackNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="home"
                size={24}
                color={focused ? "blue" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="RESULTS"
          component={ResultsStackNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="list"
                size={24}
                color={focused ? "blue" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="PROFILE"
          component={ProfileStackNavigator}
          options={{
            tabBarIcon: ({ focused }) => (
              <Entypo
                name="user"
                size={24}
                color={focused ? "blue" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainBottomTabNavigator;

const styles = StyleSheet.create({});
