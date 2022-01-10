import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Dimensions,
  View,
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,
} from "react-native";

import { Comfortaa_400Regular, useFonts } from "@expo-google-fonts/comfortaa";
import {
  Roboto_900Black,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

const Stack = createNativeStackNavigator();

export default function Auth() {
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Roboto_900Black,
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading></AppLoading>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: "white" },
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <>
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: "https://s3-alpha-sig.figma.com/img/ca7a/8fcd/49f3eef052966c87b3f213a77c431e5e?Expires=1642377600&Signature=IpkxBoNGOFFNJF-K4XNUyhwgsaT4p8cwwv2ZNQbt8EYdr7w3YYWNK8fnsK1Y-0Al5E-XdHiLUfogu3wh1Y~MCwrbXoQQJYZrJPZHOwvx0YkyPpGl-LJfNxKXzu8DeEn1mikvuQz1rr4NQq~Ocnf0hVyJ4-QR1mX1pIp~1AtELdKiZahTV6RBBkk3n1RgQ2I~kDMvAadP-2b19KYIEGQ8qU8UC6Q~wGYRwzaz37IkPZTUePO98FCRBuUGT4LvWFk1wHd3YPkKEZHRY2ob~IpxsWApBwMwe~2VXK6hylj66Uen3KydPvUirtHduvwFSFvJuAvu2D4K2qhoZQS3CTJ6Ag__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
          }}
        >
          <View style={styles.logo}>
            <Image source={require("../../../assets/login_logo.png")}></Image>
            <Text style={styles.logoText}>photo</Text>
          </View>
        </ImageBackground>
        <View style={styles.miniContainer}>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/30da/3812/ee3d04cc3dd2af8ac04a3e3610f84bff?Expires=1642377600&Signature=UlcaUbMSmcHNgTSSnepltH1oEXzeG22sTAUC5cHsQoYXwe2NeV6fwplu~oLL2Vv4BoG-BxKBCrQ9wBjW~leuxGfO1O8w2~Q26-9OMP3kzhQ5OlsgmZTDKu42YMK8WpEZnqEQ45-IA061n4NB9B-9pyJXLhyQR8zmCimGrKBDrTa~L3xqDP-VpPMRj0DuWxot1KckMa~wzLTk4MKI3oZDEHiXBoyWCZoxbzIRT65RBCMKLSY0onlvMDWXPO8GRi5unFdOt5YfADGyz6uiP1CEaAIimundyzwi0V6JLKxWaBnrY1rRpFkI3ZE~MDqXZKsbMDqWvI7s023uvfMoAzhdcw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            }}
            style={styles.avatar}
          ></Image>
          <View style={styles.textBox}>
            <Text style={styles.text1}>Pawel Czerwinski</Text>
            <Text style={styles.text2}>@pawel_czerwinski</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomBar}>
        <TouchableHighlight
          underlayColor={"grey"}
          onPress={() => navigation.navigate("Login")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableHighlight>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("Register")}
          style={[styles.button, { backgroundColor: "black" }]}
        >
          <Text style={[styles.buttonText, { color: "white" }]}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width,
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    fontFamily: "Comfortaa_400Regular",
    letterSpacing: -0.015,
    lineHeight: 54,
    marginLeft: 20,
    fontSize: 48,
  },
  bottomBar: {
    paddingHorizontal: 16,
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    borderRadius: 6,
    height: 52,
    width: width / 2 - 20.5,
  },
  buttonText: {
    fontFamily: "Roboto_900Black",
    lineHeight: 15,
    fontSize: 13,
    letterSpacing: 0.04,
  },
  miniContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    height: 28,
    width: 139,
    marginLeft: 16,
    marginBottom: 20,
    bottom: 0,
    left: 0,
  },
  avatar: {
    height: 28,
    width: 28,
    borderRadius: 14,
  },
  textBox: {
    marginLeft: 8,
  },
  text1: {
    fontFamily: "Roboto_700Bold",
    lineHeight: 15,
    fontSize: 13,
  },
  text2: {
    fontFamily: "Roboto_400Regular",
    fontSize: 11,
    lineHeight: 13,
  },
});
