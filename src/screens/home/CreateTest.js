import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  ScrollView,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import React, { useState } from "react";
import AddQuesComponent from "../../components/AddQuesComponent";

const CreateTest = () => {
  const [questions, setQuestions] = useState([]);

  const AddQues = (newQuestion) => {
    const { question_id, question, options } = newQuestion;

    const newArr = question.filter((item) => item.question_id == question_id);
    setQuestions([
      ...newArr,
      {
        question_id,
        question,
        options,
      },
    ]);
  };

  const AddNewQuestion = (index) => {
    setQuestions([
      ...questions,
      {
        question_id: index,
      },
    ]);
  };

  const RemoveAnQuestion = (index) => {
    const remove = questions.filter((item) => item.question_id != index);
    setQuestions(remove);
  };

  const bottomTabBar = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 2 * insets.top : null,
        paddingBottom: Platform.OS === "android" ? null : bottomTabBar,
      }}
    >
      <View>
        <Text>CreateTest</Text>
        {
            questions.length===0?<View>
                <TouchableHighlight onPress={()=>AddNewQuestion(0)}>
                    <Text>Add Question</Text>
                </TouchableHighlight>

            </View>:null
            
            }
        <ScrollView>
          {questions.map((item, index) => {
            return <AddQuesComponent index={index} RemoveAnQuestion={RemoveAnQuestion}/>;
          })}
          <View>
            <Pressable onPress={()=>AddNewQuestion(questions.length+1)}>
                <Text>
                    Add another question
                </Text>
            </Pressable>
          </View>
        </ScrollView>

        
      </View>
    </SafeAreaView>
  );
};

export default CreateTest;

const styles = StyleSheet.create({});
