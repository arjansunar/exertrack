import { AntDesign } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Exercises() {
  return (
    <View
      style={{
        backgroundColor: "#25292e",
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <AntDesign
          name="pluscircleo"
          size={24}
          color="white"
          style={{
            borderColor: "white",
            borderWidth: 1,
          }}
        />
      </View>
    </View>
  );
}
