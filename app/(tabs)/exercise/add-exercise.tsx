import React, { useState } from "react";
import { View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useQuery } from "@tanstack/react-query";
import * as exerciseCategoriesService from "@/db/exercise-category";

const AddExerciseScreen = () => {
  const [exerciseName, setExerciseName] = useState("");
  const [type, setType] = useState("Strength");
  const [description, setDescription] = useState("");

  const { data, isLoading } = useQuery({
    queryKey: ["all-category"],
    queryFn: exerciseCategoriesService.all,
  });

  const saveExercise = () => {
    const exerciseData = {
      name: exerciseName,
      type,
      description,
    };
    console.log("Exercise Saved:", exerciseData);
    // Add logic to save exercise
  };

  return (
    <ScrollView className="flex-1 bg-gray-900 p-4">
      <Text className="text-white text-xl font-bold mb-4">
        Add New Exercise
      </Text>

      <View className="mb-4">
        <Text className="text-white mb-2">Exercise Name</Text>
        <TextInput
          className="bg-gray-800 text-white p-3 rounded-md"
          placeholder="Enter exercise name"
          placeholderTextColor="#6b7280"
          value={exerciseName}
          onChangeText={setExerciseName}
        />
      </View>

      <View className="mb-4">
        <Text className="text-white mb-2">Type</Text>
        <View className="bg-gray-800 rounded-md">
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            <Picker
              selectedValue={type}
              onValueChange={(itemValue) => setType(itemValue)}
              style={{
                paddingHorizontal: 4,
                paddingVertical: 4,
                backgroundColor: "#1f2937",
                color: "white",
              }}
            >
              {data?.map((category) => (
                <Picker.Item
                  key={category.id}
                  label={category.name}
                  value={category.name}
                />
              ))}
            </Picker>
          )}
        </View>
      </View>

      <View className="mb-4">
        <Text className="text-white mb-2">Description</Text>
        <TextInput
          className="bg-gray-800 text-white p-3 rounded-md"
          placeholder="Enter exercise description"
          placeholderTextColor="#6b7280"
          multiline
          value={description}
          onChangeText={setDescription}
        />
      </View>

      <Pressable
        className="bg-green-500 p-4 rounded-md mt-4"
        onPress={saveExercise}
      >
        <Text className="text-white text-center font-bold">Save Exercise</Text>
      </Pressable>
    </ScrollView>
  );
};

export default AddExerciseScreen;
