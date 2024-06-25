import { StyleSheet, Text, View,Dimensions, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const {height:HEIGHT,width:WIDTH}=Dimensions.get('window')  
const HeaderComponent = ({back=false}) => {
  const navigation=useNavigation()

  return (
    <View style={{
        width:WIDTH,
        height:HEIGHT*0.05,
        justifyContent:'center',
        alignItems:'center'
    }}
    className="bg-cyan-950 flex-row"
    >
      <View className="w-1/6">
      {
        back?<Pressable onPress={()=>navigation.goBack()}><Text>
        <AntDesign name="left" size={24} color="white" />
      </Text></Pressable>:null

      }

      </View>
      <View className="w-2/3 justify-center items-center">
      <Text className="text-xl text-gray-200">QuizApp</Text>
      </View>
      <View className="w-1/6"></View>
      
      
    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({})