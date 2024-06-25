import { StyleSheet, SafeAreaView, Platform, ActivityIndicator } from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderComponent from "../../components/HeaderComponent";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import axios from "axios";
import { useState } from "react";
const TestStats = () => {
  const route = useRoute();
  console.log(route.params);
  const insets = useSafeAreaInsets();
  const bottomTabBarHeight = useBottomTabBarHeight();
  const [testdetails,setTestDetails]=useState(null)

  async function FetchTestDetails(){
    try {
      const result =await fetch('http://localhost:3000/api/test')
      setTestDetails(result.json)
      
    } catch (error) {
      
    }

  }

  


  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 2 * insets.top : null,
        paddingBottom: Platform.OS === "android" ? null : bottomTabBarHeight,
      }}
    >
      <HeaderComponent back={true} />
      {
        testdetails?.length?(<View>
          <View>
            <Text>Name of the test:{"Major Exam"} </Text>
          </View>
          <View>
            <View>
              <Text>Maximum Marks : {"100"}</Text>
              <Text>Number of questions : {"100"}</Text>
            </View>
            <View>
              <Text>
                Department : {"CSE"}
              </Text>
              <Text>
                College :{"VIT V"}
              </Text>
            </View>
          </View>
  
          <View>
            <View>
              <Text>Test Stats</Text>
            </View>
            <View>
              <Text> Maximum </Text>
            </View>
          </View>
        </View>):<ActivityIndicator size={"large"}/>
      }
      
    </SafeAreaView>
  );
};

export default TestStats;

const styles = StyleSheet.create({});



