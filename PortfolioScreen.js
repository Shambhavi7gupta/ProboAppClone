import React from "react";
import { View, Text, StyleSheet } from "react-native";

function PortfolioScreen() {
  return (
    <View style={styles.centered}>
      <Text>Portfolio Screen</Text>
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

export default PortfolioScreen;
