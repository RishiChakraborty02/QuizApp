import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AnswerComponent = ({answers,selectedAnswers,ChooseAnswer,question_id}) => {
    const selected=selectedAnswers[question_id]  
  return (
    <View className="bg-white rounded-md">
        {
            answers.map((answer)=>{
                return(
                    <Pressable onPress={()=>{
                        ChooseAnswer(question_id,answer.option_id)
                    }} className={`flex-row gap-4 p-2 rounded-md ${answer.option_id==selected?"bg-blue-400":"bg-gray-200"}`}>
                       <View>
                       <View className="w-5 h-5 rounded-full bg-white justify-center items-center">
                        
                       </View>
                       </View>
                       <View>
                        <Text>
                            {
                                answer.option
                            }
                        </Text>
                       </View>
                    </Pressable>
                )
            })
        }


      
    </View>
  )
}

export default AnswerComponent

const styles = StyleSheet.create({})