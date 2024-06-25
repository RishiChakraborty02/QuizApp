import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
const { height: HEIGHT, width: WIDTH } = Dimensions.get("window");
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TestComponent = ({ test }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: WIDTH * 0.95,
        height: HEIGHT * 0.06,
      }}
      className="bg-cyan-700 mb-2 self-center rounded-xl flex-row"
    >
      <View
        style={{
          width: WIDTH * 0.2,
          justifyContent: "center",
          alignItems: "center",
          height: HEIGHT * 0.06,
        }}
      >
        <Text className="text-md text-white">{test.name}</Text>
      </View>
      <View
        style={{
          width: WIDTH * 0.5,
          justifyContent: "center",
          alignItems: "center",
          height: HEIGHT * 0.06,
        }}
      >
        <Text className="text-sm text-white">CSE</Text>
        <Text className="text-sm text-white">VIT Vellore</Text>
      </View>
      <View
        style={{
          width: WIDTH * 0.1,
          height: HEIGHT * 0.06,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text className="text-sm text-white">100 Q</Text>
        <Text className="text-sm text-white">100 M</Text>
      </View>
      <View
        className="justify-center items-center"
        style={{
          width: WIDTH * 0.2,
        }}
      >
        <Pressable onPress={()=>navigation.navigate("GIVETEST")}>
          <Text className="text-white">
            <AntDesign name="eyeo" size={24}  />
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default TestComponent;

const styles = StyleSheet.create({});
