import React from "react";
import { View, Text, StyleSheet } from "react-native";

function SearchScreen() {
  return (
    <View style={styles.centered}>
      <Text>Search Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchScreen;
