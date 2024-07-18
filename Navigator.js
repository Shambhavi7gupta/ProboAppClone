import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "react-native-vector-icons/MaterialIcons";

import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import SportsScreen from "./SportsScreen";
import PortfolioScreen from "./PortfolioScreen";
import WalletScreen from "./WalletScreen";
import EventScreen from "./EventScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Sports"
        component={SportsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="sports-soccer" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="pie-chart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="account-balance-wallet" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Event"
          component={EventScreen}
          options={{ headerShown: false, presentation: "modal" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
