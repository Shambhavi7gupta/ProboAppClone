import React from "react";
import { View, Text, StyleSheet } from "react-native";

function SportsScreen() {
  return (
    <View style={styles.centered}>
      <Text>Sports Screen</Text>
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

export default SportsScreen;
