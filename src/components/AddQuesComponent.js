import { StyleSheet, Text, View, Dimensions, TextInput, Pressable} from 'react-native'
import React from 'react'
const {height:HEIGHT, width:WIDTH} = Dimensions.get("screen")

const AddQuesComponent = ({index,RemoveAnQuestion}) => {
  return (
    <View>
        <View>
            <Pressable onPress={()=>RemoveAnQuestion(index)}>
                <Text>
                    Remove 
                </Text>
            </Pressable>
        </View>
      <Text>AddQuesComponent</Text>
      <View>
        <TextInput placeholder='Enter Question'/>
      </View>
      <View>
      <TextInput placeholder='Enter Option 1'/>
      <TextInput placeholder='Enter Option 2'/>
      <TextInput placeholder='Enter Option 3'/>
      <TextInput placeholder='Enter Option 4'/>
      </View>
    </View>
  )
}

export default AddQuesComponent

const styles = StyleSheet.create({})