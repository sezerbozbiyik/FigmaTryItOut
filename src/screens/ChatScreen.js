import React,{useState} from "react";
import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import {
  Roboto_700Bold,
  Roboto_400Regular,
  useFonts,
} from "@expo-google-fonts/roboto";

import messages from "../../data/messages";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

let customFonts = async () => {
  await Font.loadAsync({
    ChatsFont: require("../../assets/fonts/FontsFree-Net-SFProText-Semibold.ttf"),
  });
};

export default function ChatScreen() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={customFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={<Header />}
        stickyHeaderHiddenOnScroll={false}
        stickyHeaderIndices={[0]}
        ListFooterComponent={<Messages/>}
      />
    </SafeAreaView>
  );
}

const Header = () => {
  return (
    <View
      style={{
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderBottomWidth: 0.5,
        borderBottomColor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <Text
        style={{
          fontFamily: "ChatsFont",
          fontSize: 17,
          lineHeight: 22,
          letterSpacing: -0.41,
        }}
      >
        Chats
      </Text>
    </View>
  );
};

const Messages = () => {
  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <FlatList
        keyExtractor={(item) => item.id}
        data={messages}
        renderItem={({ item }) => (
          <View
            style={{
              height: 96,
              borderBottomWidth: 0.5,
              borderBottomColor: "rgba(0, 0, 0, 0.3)",
              alignItems: "center",
              paddingLeft: "4.3%",
              flexDirection: "row",
            }}
          >
            <Image
              style={{
                height: 64,
                width: 64,
                borderRadius: 32,
              }}
              source={{ uri: item.image }}
            />
            <View style={{ paddingLeft: "4.3%" }}>
              <Text
                style={{
                  fontFamily: "Roboto_700Bold",
                  fontSize: 13,
                  lineHeight: 18,
                  marginBottom: 6,
                }}
              >
                {item.name}
              </Text>
              <Text
                numberOfLines={2}
                style={{
                  fontFamily: "Roboto_400Regular",
                  fontSize: 13,
                  lineHeight: 18,
                  height: 36,
                  width: 263,
                }}
              >
                {item.message}
              </Text>
            </View>
          </View>
        )}
      />
    );
  }
};
