import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/AntDesign";
import { Comfortaa_400Regular, useFonts } from "@expo-google-fonts/comfortaa";
import { Roboto_900Black } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";

const width = Dimensions.get("screen").width;

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Roboto_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading></AppLoading>;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor={"white"} barStyle="dark-content"></StatusBar>
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="back" size={14} />
      </TouchableOpacity>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.registerText}>Register</Text>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email address"
          textContentType="emailAddress"
          placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          value={password}
          placeholder="Create password"
          textContentType="password"
          placeholderTextColor={"rgba(0, 0, 0, 0.5)"}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => register({ email, password })}
          style={styles.button}
        >
          <Text style={styles.buttonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function register({ email, password }) {
  /* Alert.alert(
    "HATA",
    "Yanlış giriş yaptınız!",
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style:"cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed"),style:"destructive" }
    ]
  ) */
  console.log({ email, password });
}

const styles = StyleSheet.create({
  goBack: {
    width: 14,
    height: 14,
    marginLeft: 16,
    marginTop: 16,
  },
  input: {
    height: 52,
    borderWidth: 2,
    padding: 17,
    width: width - 32,
    marginBottom: 16,
  },
  registerText: {
    marginVertical: 32,
    fontSize: 36,
    fontFamily: "Comfortaa_400Regular",
    letterSpacing: -0.015,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 52,
    borderWidth: 2,
    borderRadius: 6,
    width: width - 32,
  },
  buttonText: {
    color: "white",
    fontFamily: "Roboto_900Black",
    fontSize: 13,
    letterSpacing: 0.04,
  },
});
