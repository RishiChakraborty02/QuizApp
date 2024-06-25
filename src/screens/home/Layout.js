import { StyleSheet, Text, View, SafeAreaView, Platform, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import HeaderComponent from "../../components/HeaderComponent";
import TestComponent from "../../components/TestComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import CreateTestComponent from "../../components/CreateTestComponent";
import { useEffect } from "react";
const Layout = () => {
  const insets = useSafeAreaInsets();

const bottomHeight=useBottomTabBarHeight()


async function grabToken(){
    const token= await AsyncStorage.getItem("auth_token_quizz")
    console.log(token)

}

useEffect(()=>{
    grabToken()

},[])

  const data=[
    {
        id:1,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:2,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:3,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:4,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:5,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:6,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:7,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:8,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:9,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:10,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:11,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:12,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:13,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:14,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:15,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    {
        id:16,
        name:"TEST 1",
        duration:"2 hours",
        totalMarks:100,
        questions:100,
    },
    
  ]
  return (
    <SafeAreaView
      style={{
        flex:1,
        paddingTop: Platform.OS === "android" ? 2 * insets.top : null,
        paddingBottom: bottomHeight,
      }}

    className="dark:bg-gray-950"
    >
        <HeaderComponent/>
        <CreateTestComponent/>

        <View className="mt-4">
            <FlatList data={data} renderItem={({item})=>{
                return <TestComponent test={item}/>
            }}/>
        </View>
      

    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({});
