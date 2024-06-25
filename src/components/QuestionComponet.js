import { StyleSheet, Text, View ,Dimensions, Pressable} from 'react-native'
import AnswerComponent from './AnswerComponent'


const {height:HEIGHT,width:WIDTH}=Dimensions.get('window')

const QuestionComponet = ({question,selectedAnswers,ChooseAnswer,ClearAnOption}) => {
  return (
    <View style={styles.mainContainer} className="bg-sky-700 mt-1">
        <View className="flex-row gap-4 px-2 py-2">
            <Text className="text-lg">
                Q{question.question_id}
            </Text>
            <Text>
              
                {
                    question.question 
                } ?
            </Text>

            <Pressable className="mx-15" onPress={()=>ClearAnOption(question.question_id)}>
                <Text>
                    Clear
                </Text>
            </Pressable>

        </View>

        <View>
 <AnswerComponent question_id={question.question_id} answers={question.options} ChooseAnswer={ChooseAnswer} selectedAnswers={selectedAnswers}/>
        </View>
      
    </View>
  )
}

export default QuestionComponet

const styles = StyleSheet.create({
    mainContainer:{
        padding:4

    }
})