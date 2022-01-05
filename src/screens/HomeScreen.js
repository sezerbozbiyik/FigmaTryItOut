import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";

import { Comfortaa_400Regular, useFonts } from "@expo-google-fonts/comfortaa";
import {
  Roboto_900Black,
  Roboto_700Bold,
  Roboto_400Regular,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { SafeAreaView } from "react-native-safe-area-context";
import photos from "../../data/photos";

export default function HomeScreen() {

  return (
    <SafeAreaView>
      <FlatList ListHeaderComponent={<Home></Home>} />
    </SafeAreaView>
  );
}

const Home = () => {
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Roboto_900Black,
    Roboto_700Bold,
    Roboto_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={styles.main}>
        <Text style={styles.discoverText}>Discover</Text>
        <Text style={styles.whatsnewtodayText}>WHAT'S NEW TODAY</Text>
        <View style={{ marginTop: 24 }}>
          <Image
            style={{
              width: "100%",
              height: 343,
              resizeMode: "cover",
            }}
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/0fb3/e694/2f04d7a9e41a9fbb7cbf791810e77d5b?Expires=1641772800&Signature=JaJWa4mc9wfF~tybyscyQe2~fwUnvhUqUKlfIGMgR9vjGcAPJRJ57mTgUKo6GK6BtGo~okbD~SccQpxZj3GIs153Tptbc1S2s~s-t3-AWBjswkDNWEFPPcNVr9AUTN8LIqq~Sq~4KMxzTLIp4Yu-8qKBtwDg8hpm5s2b8hkvGLwl5Il76iXC6TxTb04F5vIq4D6dqBHtH0rUUJT5apGpHlw0NgOz9RxZdwl7t-DizBrjyDXqTHNu1dlyHMMNEDqwvjL8J5e7ZMNRctwDLS5VmRgdNsW6Y8j5-qhK6ZTJFTpvxztkmxg33YftVMf3z2pEtMUX9KU9Qpqp9xgGIs1cNA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
            }}
          />

          <View
            style={{
              marginTop: 16,
              flexDirection: "row",
              height: 28,
            }}
          >
            <Image
              style={styles.circle}
              source={{
                uri: "https://s3-alpha-sig.figma.com/img/df30/536e/34bf543b82df5ad4e302b820fa57046a?Expires=1641772800&Signature=PL7WTdjl1bHyNZoY0hVEFX7gc5yr7mN5U-~oZGibLFscnfX3yCzE4XrklSnJVNILSI~Lx4xnIWgu831IWieATY3RsJEueadus6Gr41z003bQLs-clvHOtefJaHBHXmksyChFUqdF8yFRHus9og0APLOUP3KOUYtM7wrj5pXnqQNX08slAw~P9WVf8VqQDkOKZqPIiJ6wuKwR7Ow6ffboEu89gJIYcXGmc4SKimS5ybaWmDwINvN-LiY2p8xx~0yyIRfESIjH3TelIVPLd7gQEFuBZKyIfTufaZ4pBSFpNP6oLiA6wh1pp0I7I6KErvBN3Un9j73ckhr2X9eWTGahGA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
              }}
            ></Image>
            <View style={{ paddingLeft: 8 }}>
              <Text
                style={{
                  fontFamily: "Roboto_700Bold",
                  fontSize: 13,
                  lineHeight: 15,
                }}
              >
                Ridhwan Nordin
              </Text>
              <Text
                style={{
                  fontFamily: "Roboto_400Regular",
                  fontSize: 11,
                  lineHeight: 13,
                }}
              >
                @ridzjcob
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.browseText}>BROWSE ALL</Text>
          <FlatList
            keyExtractor={(item) => item.id}
            style={styles.libraryContainer}
            data={photos}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginBottom: 11,
            }}
            renderItem={({ item }) => (
              <ImageBackground
                style={styles.photo}
                source={{ uri: item.url }}
              />
            )}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  main: { paddingHorizontal: "4.3%", marginTop: 32 },
  discoverText: {
    fontFamily: "Comfortaa_400Regular",
    fontSize: 36,
    height: 40,
    lineHeight: 40.14,
    letterSpacing: -0.015,
  },
  whatsnewtodayText: {
    marginTop: 32,
    fontFamily: "Roboto_900Black",
    fontSize: 13,
    lineHeight: 15.23,
    letterSpacing: 0.04,
  },
  browseText: {
    marginTop: 48,
    fontFamily: "Roboto_900Black",
    fontSize: 13,
    lineHeight: 15.23,
    letterSpacing: 0.04,
  },
  circle: {
    height: 28,
    width: 28,
    borderRadius: 30,
  },
  libraryContainer: {
    marginTop: 24,
  },
  photo: {
    width: 167,
    height: 310,
  },
});
