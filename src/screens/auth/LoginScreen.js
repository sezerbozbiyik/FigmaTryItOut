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
} from "react-native";
import Ionicons from "react-native-vector-icons/AntDesign";

import { Comfortaa_400Regular, useFonts } from "@expo-google-fonts/comfortaa";
import { Roboto_900Black } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import {auth} from "../../../firebase";

const width = Dimensions.get("screen").width;

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Roboto_900Black,
  });

  const handleSignIn= () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        alert("Başarılı Giriş!");
      })
      .catch((error) => alert(error.message));
  };

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
        <Text style={styles.loginText}>Log in</Text>
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
        <TouchableOpacity onPress={handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
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
  loginText: {
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
