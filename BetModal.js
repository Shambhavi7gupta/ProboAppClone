import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";

const BetModal = ({ visible, onClose }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.title}>
              India to win the 2024 Women's Asian Championship?
            </Text>
            <View style={styles.optionsContainer}>
              <TouchableOpacity style={styles.optionButtonYes}>
                <Text style={styles.optionText}>Yes ₹7.5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.optionButtonNo}>
                <Text style={styles.optionText}>No ₹2.5</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.detailsText}>75% chance that you'll win</Text>
              <View style={styles.amountContainer}>
                <Text style={styles.amountText}>₹7.5 </Text>
                <Text style={styles.amountText1}>₹10.0 </Text>
              </View>
              <View style={styles.TextContainer}>
                <Text style={styles.aText}>You put</Text>
                <Text style={styles.aText}>You get</Text>
              </View>
              <Text>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                - - - - - - -
              </Text>
              <Text style={{ color: "green" }}>High Chance of Win</Text>
            </View>
            <View
              style={{
                backgroundColor: "#fff",
                borderRadius: 8,
                width: 370,
                height: 80,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity style={styles.swipeButton}>
                <Text style={styles.swipeButtonText}>Swipe for Yes</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ marginTop: 10, textAlign: "center" }}>
              Available balance
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(118, 113, 113, 0.31)",
  },
  modalContainer: {
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    padding: 20,
    // alignItems: "center",
  },
  title: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  optionButtonYes: {
    flex: 1,
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    marginRight: 10,
    alignItems: "center",
  },
  optionButtonNo: {
    flex: 1,
    backgroundColor: "#f44336",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  optionText: {
    color: "white",
    fontWeight: "bold",
  },
  detailsContainer: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
    marginBottom: 20,
    alignItems: "center",

    borderRadius: 10,
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 30,
  },
  amountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  TextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  amountText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  amountText1: {
    fontWeight: "bold",
    fontSize: 24,
    color: "green",
  },
  aText: {
    fontSize: 15,
    color: "grey",
    marginBottom: 15,
  },
  swipeButton: {
    backgroundColor: "#007bff",
    padding: 15,
    // borderWidth: 1,
    borderRadius: 35,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  swipeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default BetModal;
