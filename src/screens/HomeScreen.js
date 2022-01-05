import React, { useState } from "react";
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

export default function HomeScreen() {
  const [photoData, setphotoData] = useState([
    {
      id: "1",
      url: "https://s3-alpha-sig.figma.com/img/5f7c/7a6e/2493fc9d9516f90d6e4a07c956556c89?Expires=1641772800&Signature=Wmkf~knB1pA0llXdXRtdHuPlNyc-ykZ7DrYrM~yMcFJwBBn7Vrv2qX4cuOULD5z~adrVidNaGxKbQqOvuUcYTqzujnJaVujs~VwWoxCSed72CS9pt-e-RDpljECeGepvloawP0OSaZFkM9stBXqlR3C32C77zfjyAi6ulh0NnpdIhphJPutUYTCGw93xhi62Rytfqx-lN3QPNI92yZ7A8sF00B7YNQJetjZmv28T9Ck6tA280CbQ~MtyDsZGle9u3hI3HQWuo2Wn6BXntT1PGQbYqdH7NTMCB2lNcVg3EQbD38UdIyUhCVL8zeo2JWO1cyHCsw6~s9GOD6f33FgpKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "2",
      url: "https://s3-alpha-sig.figma.com/img/761f/1f7f/6131d6a78553b60c2124bbf5b0cab22c?Expires=1641772800&Signature=eq8KN3K1X0~eq2s8jci1Ciq1JYacygC5HJ5cNx69RRtCntYPcR2iFzmwYf~kEmJl0VQKSUIaNmx~XcmG4qZF0CdzJ8oItp1~saIm4UUvwex34DC3RKkfE3Ba60jSj6ZABtIyIvs2Bt3SOOE-vqSoPm4jTnKVeb4PS6H1j6Cv1rGWyrXyQEr1Rw-PfCDB17mdvHBqrlrj~opGSp6VgPVSTjgtS4Zo2~Z87UoOWrTaQENsUtgVs3rXWEZK7kjDitjsUpXM9ro9AXVsS-v9KsgDhXYToPZFNxxjAyibf~RXv~ZKgOrrhLr~tXb-yLw302HPPWiLw2QTamPZUXm0xRzt~g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "3",
      url: "https://s3-alpha-sig.figma.com/img/82b1/cf08/2d8c9f95c593542a65c0da55f2d8db5a?Expires=1641772800&Signature=CX4ZqW-Cwl7-9pjCrZOBSC3C3e~ibE23QKtoCMmXd7MD7oJvUPsbxgPIsISMzm-s4ZdpPzQ98Jh6yHpeF629ZwioBApxJNgLHp132r1GOOeGxzk1AMs-ZwgCH90k3LfHYXbjdbgWSdemViiMHzAWg3uBO2BziKyIG1L3fvfWw58pLSvrghRL5bOFDvMIZXxCK0fnyePXejJ1dxkES5L9nWbmbk09W~56bpxS4Wj~mr3f8ZRNsvtzTjU9YwJ~HEYLJXRuHHSbrWW2FHRwsy071mja-MBfnRRKUUUZkzloujZvDOeVmsCzgOYg6scm4oELMNMnZa4qJ4NTA51t5Hh7eQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "4",
      url: "https://s3-alpha-sig.figma.com/img/5938/2917/85fa51d58cd7dd6675ccd54c51b3ea4a?Expires=1641772800&Signature=BYB4NI-50NqIrLyAdZDW-MDvGV735qVtBQfmoCCjSoKm29AFOSEYsfGHTYRJ-vbToMh8ftwtvTE31TX1e7pleqs0Q2z1j~TIt7SB7LwbTy3NMfRUOLgPpJ-vSCUZ6pF2~iGmPgvY3eSFmmW8qHLF3aumOFHBHj-MieSNJKkBUXpgKQkumRYQbOBIjVqt5NYVOA7f4XqjsJ962LFAn4eEJPtzjWO3VSGH3sMGO2~aO2FE0wwTTHCHReC0XKxBCS6VnUoxt9sJ9C4IvCj1qqEn~mXqinHcML6BJjtY8YzMe8kiATXUsIUIYAdRAFiNlsd8t3bGlF6lQOlysb8k-PbpMA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "5",
      url: "https://s3-alpha-sig.figma.com/img/dc7c/7b67/066f226af86c03ce102f958a33b3991a?Expires=1641772800&Signature=dtjqLhsbkkaWB7~rynJ6djvpZnm7RaMsv1EQnMq4oGU334WRj7Or8sJ~tezIx5m9EuqKeB6ugh01VLCD1R6nQRPtrDoTdHzwjDy6aDe2M589vC3z5AletxQMi55nx64CqeVDkmxnBB9gGTOd7ri0b16aewjYcbWNF8VK0J1RwdLrt9dE6n046fPa~IuIDBCHrzcCIDFgVjLXTyr78~yYPjwGsM6Ibl2hEvKZnIR32biARKDiZi-UHLDYNwmdnzJmG4-1e7Sl~-C9o2NoAkTvEYLT2aIEJ02qF-bA29syi9lqqW10rfh6iapvdCDme5yGTiidm-xOPy3lY8F7czCtfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ]);

  return (
    <SafeAreaView>
      <FlatList ListHeaderComponent={<Home {...{photoData}}></Home>} />
    </SafeAreaView>
  );
}

const Home = ({photoData}) => {

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
            data={photoData}
            numColumns={2}
            columnWrapperStyle={{justifyContent:"space-between",marginBottom:11}}
            renderItem={({ item }) => (
              <ImageBackground style={styles.photo} source={{ uri: item.url }} />
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
  photo:{
    width:167,
    height:310,
  }
});
