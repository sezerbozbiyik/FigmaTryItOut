import React, { useState } from "react";
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

export default function ProfileScreen() {
  const [profilData, setprofilData] = useState([
    {
      id: "1",
      url: "https://s3-alpha-sig.figma.com/img/2ade/0d98/e2d017549828f132dd9448107195c2c4?Expires=1641772800&Signature=hYlO~oArOIv9QWO1omkygLVHXxrTZkT4KyZK1H0J14Injj3DQol5-AcXT-iLvFXDGXw1vJ1i1NvtbV2MnY99nqX6C1jL4mkBMejB8~N2LKcTMT8dtOypv7Wd5-exz0o5cac2Lb7BitNN~ndTNYlU4Y3hBjz60aBZIJtR0X8AiD3bzyGM4kOnWTnEe5ln0BAOsFt3YB5ocxmIlFfhk0jlItIBS3NatlOnf27rOJZ8JqzxINGXClwYW2858a1uuxW6ZrIuYtna176a0FfD-Xmyr2K1W8R~tXA5No65dxwzpaCu06x3DgJGFeO88~N18CSPcMQUdkBwORWlYoz4ClpXYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "2",
      url: "https://s3-alpha-sig.figma.com/img/4617/a4ed/0486a26c76e2f11f0a3c218ce8b03e0f?Expires=1641772800&Signature=ezDcCA2yvCToAASpcIMblFFuu3i9BLCqonXQY8pPe5lfJiG6tfXkB1u-Hg169VUTPkJY9MoTsTGTWUnCbY~sld8aZ97TCgBX1GSl2KY0pVQcwHrajrhXh2GMif5X8P9y8LtiGEJ1C4n~hI~cOwEmkyltaFWCUevyBaDbrHnAwAlXvO5gcxYFUYJr6lxCT~EjhfQgrvhR1FKm-nNwXvzw3ZZGZ5bmBMhBlfCMRUopdX2UOKg99hYaGSu~86yNE2s8Vc8jaYgYLgrtNu8f9CtYOagdOZ0yExLCPKgDmp9Iilr3A6BERGs8MwPk2UPdHNcfzI5OMBRPEOO3~5EHZw7KpQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "3",
      url: "https://s3-alpha-sig.figma.com/img/b456/b772/9bfd87c2f756ad7eb04aa0b569616767?Expires=1641772800&Signature=fmCzP0k9fDfi9Yap5-LDl8iKxe-bSWRjUJEoMEQEnnFNRIByaUT0I~ZckLiowAR9c1OfmcbAjRSNcNKZ72XYccK8d4f8V0MoNSjNkRuCoqpON1szX0-3wLDmIuARgTlTq7k-iKjWU3Lorj5TKt2vrOfzvW79EYx0M1~aiyqqHt7PtVBEiXTR2f7YIeD0evocstLcoZrLR-~kpVh31AoX9jwWtIp07cfoigiorqUoY3jehOnXzhkpcQHJJYj5crnKXBth9hcgWM97ml9xKLegOqhOB39nqtMPvsykI2WQFg6KFd3Bs2v5qNv69VPLMY0nXuICi8XDFmWosXXVBIUT4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "4",
      url: "https://s3-alpha-sig.figma.com/img/6f4a/e089/b252688e26d038f2271ab651705640e9?Expires=1641772800&Signature=ffEQSxLLH1PDjq06hjG2fzAiQVSbKDb-TGIxFCvTP0ymrlTUC63RmbjLhCDPE1PzAuZkBrXj-p87TETKb71Wg9fPZOcHH6bt4M7mWHYGC-EdQaplarNxsyWsk4wRPEkJ3hmLTVTsEN9o0mQu4c26Wrlx~~1lXkpgBStxio-kmg15G91peNMN7tp0HFCTRD4LnY9Yq8FOdgnu41bS2wIvSifEJX4aMXMIHKmkDtGMDqg~KbZ8kMQ0PWmpARg3acEbxn52aILIUxw60DJQH3zrncE0fNnR2j6Ze9hyWbAAg~goUVmHOSoSF2FpNTZ2ofkhzZE8I5Kx6j5h0fL4~gBGQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ]);

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
          ListHeaderComponent={<Header></Header>}
          ListFooterComponent={<Footer {...{ profilData }}></Footer>}
        />
      </SafeAreaView>
    );
  }
}

const Header = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        style={styles.avatar}
        source={{
          uri: "https://s3-alpha-sig.figma.com/img/0845/f26e/ba1d8547c2f8fbd104375e30cdb2ee85?Expires=1641772800&Signature=PNaKI~DCPNVBcw69osouBHhlzfcns58v7ut0dU2TyRcnvDJzwPkWEQn2a0TZElFa8WZoC-eYOuCdosaPeym4u7hNu0rlf-ZrttaioBUpTRLJGwJYZweukDX1umIs1fDmBsxG3QiKpCEUQgaZp2VMx4fGMAVhLf-g1372HbvU9eb9XmCzudiAQiLonQ1f8BV5WWsVZZtYTXYJHN7s9aihHjDyTbCcJM4njeqv~a1~npV~6hgQoXgGn3-EC3y7Llpf88syMrMoUeLPharf8V5l~XP-sOOHbbC4Leduxi48yZqeDN6aKvPiUTMguA8hpiSDlcRxRqjjNJTpKASnrGclYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        }}
      ></Image>
      <Text style={comfortaa1}>Jane</Text>
      <Text style={roboto1}>SAN FRANCISCO, CA</Text>
      <TouchableOpacity style={button1} activeOpacity={0.6} onPress={() => {}}>
        <Text style={roboto2}>FOLLOW JANE</Text>
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

const Footer = ({ profilData }) => {
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={profilData}
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
