import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Landing from "../screens/auth/Landing";
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import { useEffect } from "react";
const stack = createStackNavigator();
const AuthNavigator = () => {
  

  useEffect(()=>{
    (async()=>{
      await AsyncStorage.setItem("auth_token_quizz","jfihdgfoadnfgnld")

    })()
  },[])
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <stack.Screen name="LANDING" component={Landing} />
        <stack.Screen name="LOGIN" component={Login} />
        <stack.Screen name="REGISTER" component={Register} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
