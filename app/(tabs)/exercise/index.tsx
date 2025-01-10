import { useExercises } from "@/data/hooks/exercise";
import { Exercise } from "@/db/exercise";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Exercises() {
  const { data, isLoading } = useExercises();
  return (
    <View className="px-2 pt-3 h-full bg-gray-900">
      <View className="flex flex-row justify-between ">
        <Text className="text-2xl font-bold text-white">Exercise</Text>
        <Link href="/exercise/add-exercise" className="text-white">
          <AntDesign name="pluscircleo" size={24} />
        </Link>
      </View>
      <View className="mt-6">
        {data?.map((exercise) => (
          <ExerciseItem data={exercise} key={exercise.id} />
        ))}
      </View>
    </View>
  );
}

function ExerciseItem(props: { data: Exercise }) {
  return (
    <View className="w-full p-4 bg-gray-700 rounded-xl">
      <View className="text-white flex flex-row items-center gap-2">
        <MaterialCommunityIcons name="dumbbell" size={24} color="white" />
        <Text className="text-white text-xl pb-2">{props.data.name}</Text>
      </View>
      {!!props.data.description && (
        <Text className="text-gray-300">{props.data.description}</Text>
      )}
    </View>
  );
}
