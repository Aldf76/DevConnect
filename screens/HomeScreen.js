import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput, View, StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import AboutScreen from "../screens/AboutScreen";
import { useTheme } from "../utils/theme"; // se estiver usando tema

const Stack = createNativeStackNavigator();

function SearchHeader({ searchQuery, setSearchQuery }) {
  const { theme } = useTheme();

  return (
    <View style={styles.headerContainer}>
      <TextInput
        placeholder="Pesquisar posts..."
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={[
          styles.searchInput,
          {
            backgroundColor: theme.card,
            color: theme.text,
            borderColor: theme.border,
          },
        ]}
      />
    </View>
  );
}

export default function AppNavigator() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          headerTitle: () => (
            <SearchHeader
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          ),
        }}
      >
        {() => <HomeScreen externalSearchQuery={searchQuery} />}
      </Stack.Screen>

      <Stack.Screen name="Feedback" component={FeedbackScreen} />
      <Stack.Screen name="Sobre" component={AboutScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    alignItems: "center",
    width: "100%", // ✅ Ocupa 100% da largura
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "center",
  },
  searchInput: {
    width: "100%", // ✅ Garante que o campo preencha o container
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

