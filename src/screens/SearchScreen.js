import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";

import { Comfortaa_400Regular, useFonts } from "@expo-google-fonts/comfortaa";
import { Roboto_900Black } from "@expo-google-fonts/roboto";

import AppLoading from "expo-app-loading";
import photos from "../../data/photos";

export default function SearchScreen() {
  return (
    <SafeAreaView>
      <FlatList
        style={styles.main}
        ListHeaderComponent={<Header></Header>}
        ListFooterComponentStyle={styles.library}
        ListFooterComponent={<Photos></Photos>}
      />
    </SafeAreaView>
  );
}

const Header = () => {
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Roboto_900Black,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Text style={styles.search}>Search</Text>
        <View style={styles.searchBox}></View>
        <Text style={styles.resultText}>ALL RESULTS</Text>
      </>
    );
  }
};

const Photos = () => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={photos}
      numColumns={3}
      columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 11 }}
      renderItem={({ item }) => (
        <ImageBackground style={styles.photo} source={{ uri: item.url }} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: "4.3%",
  },
  search: {
    marginTop: 32,
    height: 40,
    fontFamily: "Comfortaa_400Regular",
    fontSize: 36,
    lineHeight: 40,
    letterSpacing: -0.015,
  },
  searchBox: {
    marginTop: 32,
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    height: 52,
  },
  resultText: {
    marginTop: 32,
    fontFamily: "Roboto_900Black",
    fontSize: 13,
    lineHeight: 15,
    letterSpacing: 0.04,
  },
  library: {
    marginTop: 24,
  },
  photo: {
    height: 107,
    width: 107,
  },
});

//MARGİNBOTTOM HATALI YAZIM DÜZELTİLMESİ GEREKİYOR!!
