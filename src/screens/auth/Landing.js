import { SafeAreaView, StyleSheet, Text, View, Platform, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Landing = () => {
  const insets = useSafeAreaInsets();
  const navigation=useNavigation()
  return (
    <SafeAreaView
      className="flex-1 bg-gray-950"
      style={{
        paddingTop: Platform.OS == "android" ? 2 * insets.top : null,
      }}
    >
      <View className="flex-1">
        <View className="flex-1 justify-center items-center">
          <Text className="text-gray-50 text-3xl font-sans ">
            Welcome to Quizz app
          </Text>
        </View>

        <View className="flex-1  items-center top-10">
            <Pressable onPress={()=>navigation.navigate("LOGIN")}>
                <View style={{
                    height:45,
                    width:160,
                    backgroundColor:"blue",
                    borderRadius:12,
                    justifyContent:"center",
                    alignItems:"center"
                }}>
                    <Text className="text-white">Get Started</Text>

                </View>
            </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Landing;

const styles = StyleSheet.create({});
