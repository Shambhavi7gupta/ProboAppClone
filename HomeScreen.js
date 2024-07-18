import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import BetModal from "./BetModal";
function HomeScreen() {
  const navigation = useNavigation();
  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: "https://get.pxhere.com/photo/apple-creative-light-black-and-white-white-photography-fruit-glass-reflection-darkness-black-monochrome-still-life-art-creativity-image-macro-photography-still-life-photography-monochrome-photography-black-wallpaper-computer-wallpaper-912907.jpg",
        }}
        style={styles.headerImage}
      />
      <View style={styles.categories}>
        <TouchableOpacity style={styles.categoryButton}>
          <Image
            source={require("./assets/Images/CricketBall.png")}
            style={styles.categoryImage}
          />
          <Text>Cricket</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Image
            source={require("./assets/Images/Bitcoin.png")}
            style={styles.categoryImage}
          />
          <Text>Crypto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Image
            source={require("./assets/Images/Football.png")}
            style={styles.categoryImage}
          />
          <Text>Football</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Image
            source={require("./assets/Images/Stock.png")}
            style={styles.categoryImage}
          />
          <Text>Stocks</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryButton}>
          <Image
            source={require("./assets/Images/Stock.png")}
            style={styles.categoryImage}
          />
          <Text>Growth</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Trending Now</Text>
      <View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <View style={styles.trending}>
            <TouchableOpacity style={styles.trendingButton}>
              <Image
                source={require("./assets/Images/ipl.png")}
                style={styles.trendingImage}
              />
              <Text>KOL v/s MUMB</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trendingButton}>
              <Image
                source={require("./assets/Images/Football.png")}
                style={styles.trendingImage}
              />
              <Text>PSG v/s Dortmund</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trendingButton}>
              <Image
                source={require("./assets/Images/ipl.png")}
                style={styles.trendingImage}
              />
              <Text>Cricket</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trendingButton}>
              <Image
                source={require("./assets/Images/Bitcoin.png")}
                style={styles.trendingImage}
              />
              <Text>Bitcoin</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.categories}>
            <TouchableOpacity style={styles.trendingButton}>
              <Image
                source={require("./assets/Images/ipl.png")}
                style={styles.trendingImage}
              />
              <Text>Cricket</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trendingButton}>
              <Image
                source={require("./assets/Images/Bitcoin.png")}
                style={styles.trendingImage}
              />
              <Text>Bitcoin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trendingButton}>
              <Image
                source={require("./assets/Images/Stock.png")}
                style={styles.trendingImage}
              />
              <Text>Growth</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.trendingButton}>
              <Image
                source={require("./assets/Images/Football.png")}
                style={styles.trendingImage}
              />
              <Text>PSG v/s Dortmund</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <View style={styles.trendingItem}>
        <TouchableOpacity onPress={() => navigation.navigate("Event")}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text>Kolkata to win the match vs Mumbai?</Text>
              <Text>H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0</Text>
            </View>
            <Image
              source={require("./assets/Images/ipl.png")}
              style={styles.boxImage}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.choiceContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.yesButton}
          >
            <Text style={styles.choiceText}>Yes ₹ 5.3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.noButton}
          >
            <Text style={styles.choiceText}>NO ₹ 4.7</Text>
          </TouchableOpacity>
          <BetModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        </View>
      </View>
      <View style={styles.trendingItem}>
        <TouchableOpacity onPress={() => navigation.navigate("Event")}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text>Kolkata to win the match vs Mumbai?</Text>
              <Text>H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0</Text>
            </View>
            <Image
              source={require("./assets/Images/ipl.png")}
              style={styles.boxImage}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.choiceContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.yesButton}
          >
            <Text style={styles.choiceText}>Yes ₹ 5.3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.noButton}
          >
            <Text style={styles.choiceText}>NO ₹ 4.7</Text>
          </TouchableOpacity>
          <BetModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        </View>
      </View>
      <View style={styles.trendingItem}>
        <TouchableOpacity onPress={() => navigation.navigate("Event")}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text>Kolkata to win the match vs Mumbai?</Text>
              <Text>H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0</Text>
            </View>
            <Image
              source={require("./assets/Images/ipl.png")}
              style={styles.boxImage}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.choiceContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.yesButton}
          >
            <Text style={styles.choiceText}>Yes ₹ 5.3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.noButton}
          >
            <Text style={styles.choiceText}>NO ₹ 4.7</Text>
          </TouchableOpacity>
          <BetModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        </View>
      </View>
      <View style={styles.trendingItem}>
        <TouchableOpacity onPress={() => navigation.navigate("Event")}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text>Kolkata to win the match vs Mumbai?</Text>
              <Text>H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0</Text>
            </View>
            <Image
              source={require("./assets/Images/ipl.png")}
              style={styles.boxImage}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.choiceContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.yesButton}
          >
            <Text style={styles.choiceText}>Yes ₹ 5.3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.noButton}
          >
            <Text style={styles.choiceText}>NO ₹ 4.7</Text>
          </TouchableOpacity>
          <BetModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        </View>
      </View>
      <View style={styles.trendingItem}>
        <TouchableOpacity onPress={() => navigation.navigate("Event")}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text>Kolkata to win the match vs Mumbai?</Text>
              <Text>H2H last 5 T20: Kolkata 4, Mumbai 1, DRAW 0</Text>
            </View>
            <Image
              source={require("./assets/Images/ipl.png")}
              style={styles.boxImage}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.choiceContainer}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.yesButton}
          >
            <Text style={styles.choiceText}>Yes ₹ 5.3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={styles.noButton}
          >
            <Text style={styles.choiceText}>NO ₹ 4.7</Text>
          </TouchableOpacity>
          <BetModal
            visible={modalVisible}
            onClose={() => setModalVisible(false)}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },
  scrollViewContainer: {
    flexDirection: "column",
  },
  headerImage: {
    width: "100%",
    height: 200,
  },
  categories: {
    flexDirection: "row",
    gap: 15,
    padding: 10,
  },
  categoryButton: {
    backgroundColor: "#fff",
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  categoryImage: {
    width: 40,
    height: 40,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
  },
  trendingItem: {
    padding: 15,
    backgroundColor: "#fff",
    marginVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  trending: {
    flexDirection: "row",
    gap: 15,
    padding: 10,
  },
  trendingButton: {
    backgroundColor: "#fff",
    height: 50,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
  },
  trendingImage: {
    width: 30,
    height: 30,
  },
  choiceContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  yesButton: {
    padding: 10,
    backgroundColor: "#e0f7fa",
    borderRadius: 5,
  },
  noButton: {
    padding: 10,
    backgroundColor: "#ffebee",
    borderRadius: 5,
  },
  choiceText: {
    fontWeight: "bold",
  },
  boxImage: {
    width: 30,
    height: 30,
    flexDirection: "row",
  },
});

export default HomeScreen;
