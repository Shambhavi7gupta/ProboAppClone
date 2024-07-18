import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BetModal from "./BetModal";

const screenWidth = Dimensions.get("window").width;

const EventScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };
  const [orderBook, setOrderBook] = useState([
    {
      image: require("./assets/Images/User.png"),
      name: "Prober",
      price: 1.0,
      time: "a few seconds ago",
    },
    {
      image: require("./assets/Images/User.png"),
      name: "Prober",
      price: 1.5,
      time: "a few seconds ago",
    },
    {
      image: require("./assets/Images/User.png"),
      name: "Prober",
      price: 1.5,
      time: "a few seconds ago",
    },
    {
      image: require("./assets/Images/User.png"),
      price: 1.5,
      time: "a minute ago",
    },
    {
      image: require("./assets/Images/User.png"),
      name: "Prober",
      price: 1.0,
      time: "a minute ago",
    },
  ]);

  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Text onPress={handleBack} style={styles.backButton}>
            {"<"} Event 2663704
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.shareButton}>Share</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.Page1}>
          <View style={styles.content}>
            <Image
              source={require("./assets/Images/Books.png")}
              style={styles.image}
            />
            <View style={styles.newsTextBox}>
              <Text style={styles.newsText}>News 24X7</Text>
            </View>
            <Text style={styles.questionText}>
              NEET UG 2024 to be reconducted for all the students?
            </Text>
            <View style={styles.infoBox}>
              <Text style={styles.infoText}>
                The exam was re-conducted for 1563 candidates...
              </Text>
            </View>
            <Text>THE MARKET PREDICT</Text>
            <Text style={styles.probabilityText}>25% probability of Yes</Text>

            <LineChart
              data={{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                  {
                    data: [20, 45, 28, 80, 99, 43],
                  },
                ],
              }}
              width={screenWidth - 32}
              height={240}
              yAxisLabel="%"
              chartConfig={{
                backgroundColor: "#ffffff",
                backgroundGradientFrom: "#ffffff",
                backgroundGradientTo: "#ffffff",
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
              style={{
                marginVertical: 10,
                borderRadius: 16,
              }}
            />
          </View>
        </View>
        <View style={styles.Page2}>
          <View style={styles.orderBookBox}>
            <Text style={styles.title}>Activity</Text>
            <Text style={styles.title}>Order Book</Text>
          </View>
          <View style={styles.orderBookContainer}>
            {orderBook
              .slice(0, showMore ? orderBook.length : 5)
              .map((item, index) => (
                <View key={index} style={styles.orderItem}>
                  <View style={styles.userName}>
                    <Image source={item.image} style={styles.userImage} />

                    <Text style={styles.name}>{item.name}</Text>
                  </View>
                  <Text style={styles.priceY}>₹{item.price}</Text>
                  <Text style={styles.time}>{item.time}</Text>
                  <Text style={styles.priceN}>₹9.0</Text>
                  <View style={styles.userName}>
                    <Image source={item.image} style={styles.userImage} />
                    <Text style={styles.name}>{item.name}</Text>
                  </View>
                </View>
              ))}
          </View>

          {showMore ? (
            <TouchableOpacity
              style={styles.showMoreButton}
              onPress={handleShowMore}
            >
              <Text style={styles.showMoreButtonText}>Show less</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.showMoreButton}
              onPress={handleShowMore}
            >
              <Text style={styles.showMoreButtonText}>Show more</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.Page3}>
          <View style={styles.OuterBox}>
            <Text style={styles.title}>About the event</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={styles.BoxContainer}>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Traders</Text>
                  <Text style={styles.infoValue}>61.6K</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Started at</Text>
                  <Text style={styles.infoValue}>Jun 19, 2024 3:40 PM</Text>
                </View>
              </View>
              <View style={styles.Boxinner}>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Volume</Text>
                  <Text style={styles.infoValue}>14.2L</Text>
                </View>
                <View style={styles.infoRow}>
                  <Text style={styles.infoLabel}>Ending at</Text>
                  <Text style={styles.infoValue}>Aug 31, 2024 11:59 PM</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.section} onPress={() => {}}>
              <Text style={styles.sectionTitle}>Overview</Text>
              <Text style={styles.sectionText}>Information about event</Text>
              {/* <View style={styles.arrow} /> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.section} onPress={() => {}}>
              <Text style={styles.sectionTitle}>Source Of Truth</Text>
              <Text style={styles.sectionText}>
                Information about source of truth
              </Text>
              {/* <View style={styles.arrow} /> */}
            </TouchableOpacity>

            <TouchableOpacity style={styles.section} onPress={() => {}}>
              <Text style={styles.sectionTitle}>Rules</Text>
              <Text style={styles.sectionText}>Terms and conditions</Text>
              {/* <View style={styles.arrow} /> */}
            </TouchableOpacity>

            <View style={styles.bottomContainer}>
              <Text style={styles.bottomText}>Keep</Text>
              <Text style={styles.bottomText}>Trading!</Text>
              <Text style={styles.bottomText2}>
                Opinion hai to Probo par do
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.optionButton}
        >
          <Text style={styles.optionYesText}>Yes ₹2.5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.optionButton}
        >
          <Text style={styles.optionNoText}>No ₹7.5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DBD6D6",
  },
  header: {
    padding: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
  },
  backButton: {
    fontSize: 16,
    color: "#000",
  },
  shareButton: {
    fontSize: 16,
    color: "#000",
  },
  Page1: {
    backgroundColor: "#F0F0F0",
    marginBottom: 20,
  },
  Page2: { backgroundColor: "#F0F0F0", marginBottom: 20 },
  Page3: { backgroundColor: "#F0F0F0" },
  OuterBox: {
    padding: 15,
  },
  content: {
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    marginVertical: 16,
  },
  newsTextBox: {
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    width: 120,
    alignItems: "center",
    margin: 10,
  },
  newsText: {
    fontSize: 18,
    color: "#000",
    marginVertical: 8,
  },
  questionText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  infoBox: {
    backgroundColor: "#fff3cd",
    padding: 10,
    borderRadius: 5,
    marginVertical: 8,
    marginBottom: 30,
  },
  infoText: {
    fontSize: 14,
    color: "#856404",
  },
  probabilityText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007bff",
    marginVertical: 8,
    marginBottom: 30,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // marginTop: 16,
    height: 80,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  optionButton: {
    width: 150,
    height: 50,
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  optionYesText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#e0f7fa",
    padding: 16,
    borderRadius: 8,
  },
  optionNoText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#ffebee",
    padding: 16,
    borderRadius: 8,
  },
  orderBookBox: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  orderBookContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",

    marginBottom: 16,
  },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  userName: {
    flexDirection: "column",
    justifyContent: "space-around",
  },

  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontSize: 14,
  },
  priceY: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#e0f7fa",
    padding: 8,
    borderRadius: 8,
  },
  priceN: {
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#ffebee",
    padding: 8,
    borderRadius: 8,
  },
  time: {
    marginTop: 42,
    fontSize: 12,
    color: "#999",
    alignItems: "center",
  },
  showMoreButton: {
    padding: 16,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  showMoreButtonText: {
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  BoxContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  Boxinner: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  infoRow: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 16,

    color: "#999999",
  },
  infoValue: {
    fontSize: 16,
  },
  section: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionText: {
    fontSize: 14,
    color: "#999999",
  },
  arrow: {
    width: 10,
    height: 10,
    borderWidth: 2,
    borderColor: "#000",
    borderStyle: "solid",
    transform: [{ rotate: "45deg" }],
    alignItems: "left",
  },
  bottomContainer: {
    marginTop: 20,
  },
  bottomText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#d9d9d9",
  },
  bottomText2: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});

export default EventScreen;
