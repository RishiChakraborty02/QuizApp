import { StyleSheet, View, TouchableHighlight, Dimensions } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { height: HEIGHT, width: WIDTH } = Dimensions.get("screen");

const CreateTestComponent = () => {
  const navigation = useNavigation();
  return (

    <TouchableHighlight underlayColor="#164e63"
      onPress={()=>navigation.navigate("CREATETEST")}
      style={{
        height: 90,
        width: 90,
        borderRadius: 45,
        alignSelf: 'center',
        position: "absolute",
        top: HEIGHT * 0.8,
        zIndex: 99,
        left: WIDTH * 0.7,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#083344',
      }}
    >
      <AntDesign name="plus" size={40} color={"white"} />
    </TouchableHighlight>
  );
};

export default CreateTestComponent;

const styles = StyleSheet.create({});