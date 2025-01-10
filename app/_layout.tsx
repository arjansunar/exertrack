import { Stack } from "expo-router";

import { useMigrations } from "drizzle-orm/expo-sqlite/migrator";
import "../global.css";
import migrations from "@/db/migrations/migrations";
import { db } from "@/db";
import { Text, View } from "react-native";

// TODO:
// Loading screen to setup db
export default function RootLayout() {
  const { success, error } = useMigrations(db, migrations);

  if (error) {
    return (
      <View>
        <Text>Migration error: {error.message}</Text>
      </View>
    );
  }

  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
