import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Exercises() {
  return (
    <View className="p-2 h-full">
      <View className="flex flex-row justify-between">
        <Text className="text-xl font-medium">Exercise</Text>
        <Link href="/exercise/add-exercise">
          <AntDesign name="pluscircleo" size={24} className="" />
        </Link>
      </View>
    </View>
  );
}
