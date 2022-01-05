import React from "react";
import {
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  FlatList,
  Image,
} from "react-native";

import { Roboto_900Black, useFonts } from "@expo-google-fonts/roboto";
import { Comfortaa_400Regular } from "@expo-google-fonts/comfortaa";
import AppLoading from "expo-app-loading";
import profile from "../../data/profile";

export default function ProfileScreen() {
  let [fontsLoaded] = useFonts({
    Roboto_900Black,
    Comfortaa_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView>
        <FlatList
          ListHeaderComponent={<Header />}
          ListFooterComponent={<Footer />}
        />
      </SafeAreaView>
    );
  }
}

const Header = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image style={styles.avatar} source={{ uri: profile.avatar }}></Image>
      <Text style={comfortaa1}>{profile.name}</Text>
      <Text style={roboto1}>{profile.city.toUpperCase()}</Text>
      <TouchableOpacity style={button1} activeOpacity={0.6} onPress={() => {}}>
        <Text style={roboto2}>FOLLOW {profile.name.toUpperCase()}</Text>
      </TouchableOpacity>
      <TouchableHighlight
        underlayColor={"grey"}
        style={button2}
        onPress={() => {}}
      >
        <Text style={page.roboto}>MESSAGE</Text>
      </TouchableHighlight>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={profile.photos}
        style={styles.photoslibrary}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 11,
        }}
        renderItem={({ item }) => (
          <Image style={styles.photo} source={{ uri: item.url }} />
        )}
      ></FlatList>
    </View>
  );
};

const page = StyleSheet.create({
  roboto: {
    fontSize: 13,
    letterSpacing: 0.04,
    fontFamily: "Roboto_900Black",
    lineHeight: 15.23,
  },
  comfortaa: {
    fontFamily: "Comfortaa_400Regular",
    letterSpacing: -0.015,
    lineHeight: 40.14,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    width: "91.5%",
    height: 52,
  },
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "4.3%",
  },
  avatar: {
    marginTop: 32,
    height: 128,
    width: 128,
    borderRadius: 64,
  },
  textArea0: {
    fontSize: 36,
    marginTop: 32,
  },
  textArea1: {
    marginTop: 16,
  },
  textArea2: {
    color: "white",
  },
  button1: {
    marginTop: 32,
    backgroundColor: "black",
    color: "white",
  },
  button2: {
    marginTop: 16,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2,
  },
  photoslibrary: {
    marginTop: 32,
  },
  photo: {
    width: 167,
    height: 310,
  },
});

const roboto1 = StyleSheet.compose(page.roboto, styles.textArea1);
const roboto2 = StyleSheet.compose(page.roboto, styles.textArea2);
const comfortaa1 = StyleSheet.compose(page.comfortaa, styles.textArea0);
const button1 = StyleSheet.compose(page.button, styles.button1);
const button2 = StyleSheet.compose(page.button, styles.button2);
