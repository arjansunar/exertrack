import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#ffd33d",
        tabBarStyle: {
          backgroundColor: "#25292e",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="exercise/index"
        options={{
          title: "Exercise",
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name={"dumbbell"} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="exercise/add-exercise"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
