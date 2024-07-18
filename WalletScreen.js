import React from "react";
import { View, Text, StyleSheet } from "react-native";

function WalletScreen() {
  return (
    <View style={styles.centered}>
      <Text>Wallet Screen</Text>
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

export default WalletScreen;
