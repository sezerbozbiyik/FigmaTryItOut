import React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//Screens
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from "./screens/SearchScreen";
import PostScreen from "./screens/PostScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ChatScreen from "./screens/ChatScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <>
      <StatusBar backgroundColor={"white"} barStyle="dark-content"></StatusBar>
      <NavigationContainer>
        <Tab.Navigator
          sceneContainerStyle={{ backgroundColor: "white" }}
          screenOptions={({ route }) => ({
            tabBarStyle: styles.bottomBar,
            tabBarItemStyle: styles.bottomBarItem,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Home") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Profile") {
                iconName = focused ? "person" : "person-outline";
              } else if (route.name === "Chat") {
                iconName = focused ? "chatbubble" : "chatbubble-outline";
              } else if (route.name === "Search") {
                iconName = focused ? "search" : "search-outline";
              } else if (route.name === "Post") {
                return <CustomAddIcon {...{ focused }} />;
              }
              return <Ionicons name={iconName} size={18} color={color} />;
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "black",
            headerShown: false,
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Post" component={PostScreen} />
          <Tab.Screen name="Chat" component={ChatScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const CustomAddIcon = ({ focused }) => {
  const plus = StyleSheet.create({
    h1: {
      position: "absolute",
      height: 1,
      width: 13,
      backgroundColor: "white",
    },
    h2: {
      position: "absolute",
      height: 13,
      width: 1,
      backgroundColor: "white",
    },
  });
  let plush1, plush2;
  if (focused) {
    (plush1 = StyleSheet.compose(plus.h1, {
      height: 2,
      backgroundColor: "black",
    })),
      (plush2 = StyleSheet.compose(plus.h2, {
        width: 2,
        backgroundColor: "black",
      }));
  } else {
    (plush1 = StyleSheet.compose(plus.h1)),
      (plush2 = StyleSheet.compose(plus.h2));
  }
  return (
    <LinearGradient
      start={[0.4, 1.0]}
      end={[0.6, 0.0]}
      colors={["#FF4D00", "#FF00D6"]}
      style={styles.bottomBarWidget2}
    >
      <View style={plush1}></View>
      <View style={plush2}></View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    height: 70,
    paddingTop: 9,
    borderTopColor: "rgba(0, 0, 0,0.3)",
    borderTopWidth: 0.5,
    backgroundColor: "white",
  },
  bottomBarItem: {
    height: 40,
  },
  bottomBarWidget2: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 70,
    borderRadius: 20,
  },
});

// androidde iconlar doğru boyutlarında değil !!
// bottombar 50 height olucak!!
