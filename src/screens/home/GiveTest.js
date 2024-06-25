import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Platform,
  FlatList,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import HeaderComponent from "../../components/HeaderComponent";
import QuestionComponet from "../../components/QuestionComponet";
const GiveTest = () => {
  const bottomHeight = useBottomTabBarHeight();
  const insets = useSafeAreaInsets();

  const [selectedAnswers, setSelectedAnswers] = useState({});

  function ChooseAnswer(question_id, option_id) {
    setSelectedAnswers({
      ...selectedAnswers,
      [question_id]: option_id,
    });
  }

  const questions = [
    {
      question_id: 1,
      question: "What is the capital of india",
      options: [
        {
          option_id: 1,
          option: "Mumbai",
        },
        {
          option_id: 2,
          option: "Delhi",
        },
        {
          option_id: 3,
          option: "Chennai",
        },
        {
          option_id: 4,
          option: "Kolkata",
        },
      ],
    },
    {
      question_id: 2,
      question: "What is the capital of india",
      options: [
        {
          option_id: 1,
          option: "Mumbai",
        },
        {
          option_id: 2,
          option: "Delhi",
        },
        {
          option_id: 3,
          option: "Chennai",
        },
        {
          option_id: 4,
          option: "Kolkata",
        },
      ],
    },
    {
      question_id: 3,
      question: "What is the capital of india",
      options: [
        {
          option_id: 1,
          option: "Mumbai",
        },
        {
          option_id: 2,
          option: "Delhi",
        },
        {
          option_id: 3,
          option: "Chennai",
        },
        {
          option_id: 4,
          option: "Kolkata",
        },
      ],
    },
    {
      question_id: 4,
      question: "What is the capital of india",
      options: [
        {
          option_id: 1,
          option: "Mumbai",
        },
        {
          option_id: 2,
          option: "Delhi",
        },
        {
          option_id: 3,
          option: "Chennai",
        },
        {
          option_id: 4,
          option: "Kolkata",
        },
      ],
    },
    {
      question_id: 5,
      question: "What is the capital of india",
      options: [
        {
          option_id: 1,
          option: "Mumbai",
        },
        {
          option_id: 2,
          option: "Delhi",
        },
        {
          option_id: 3,
          option: "Chennai",
        },
        {
          option_id: 4,
          option: "Kolkata",
        },
      ],
    },
    {
      question_id: 6,
      question: "What is the capital of india",
      options: [
        {
          option_id: 1,
          option: "Mumbai",
        },
        {
          option_id: 2,
          option: "Delhi",
        },
        {
          option_id: 3,
          option: "Chennai",
        },
        {
          option_id: 4,
          option: "Kolkata",
        },
      ],
    },
    {
      question_id: 7,
      question: "What is the capital of india",
      options: [
        {
          option_id: 1,
          option: "Mumbai",
        },
        {
          option_id: 2,
          option: "Delhi",
        },
        {
          option_id: 3,
          option: "Chennai",
        },
        {
          option_id: 4,
          option: "Kolkata",
        },
      ],
    },
  ];
  console.log(selectedAnswers);

  function ClearAllAnswers() {
    setSelectedAnswers({});
  }

  function ClearAnOption(question_id) {
    const temp = selectedAnswers;
    delete temp[question_id];
    setSelectedAnswers(temp);
  }


  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? 2 * insets.top : null,
        paddingBottom: bottomHeight,
      }}
      className="flex-1 bg-white"
    >
      <HeaderComponent back={true} />

      <View>
        <View className="justify-center items-center">
          <Text className="text-3xl text-bold">Major Test</Text>
          <Pressable onPress={() => ClearAllAnswers()}>
            <Text className="text-xl text-red-500">Clear All Answers</Text>
          </Pressable>
        </View>
        <View className="flex-row justify-around">
          <Text className="text-xl">Number of questions {"60"}</Text>
          <Text className="text-xl">Total Marks : {"120"}</Text>
        </View>
      </View>

      <View style={{
        paddingBottom:120

      }}>
        <FlatList
          data={questions}
          renderItem={({ item }) => {
            return (
              <QuestionComponet
                question={item}
                selectedAnswers={selectedAnswers}
                ChooseAnswer={ChooseAnswer}
                ClearAnOption={ClearAnOption}
              />
            );
          }}
        />
      </View>
      
    </SafeAreaView>
  );
};

export default GiveTest;

const styles = StyleSheet.create({});
