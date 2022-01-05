import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { Comfortaa_400Regular, useFonts } from "@expo-google-fonts/comfortaa";
import { Roboto_900Black } from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { FlatList } from "react-native";

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
  const [DATA, setDATA] = useState([
    {
      id: "1",
      url: "https://s3-alpha-sig.figma.com/img/1e85/7db1/1a58878727322e1b5de2a8c58d2cb6e5?Expires=1641772800&Signature=Kat2-iXiOSBMX8e1ivOOC2iPPVW0jdvfZuoorKy-0dpCEpN7QxOhL74crSlhdO8ovW3wEoydL9HLi1-XLlquzh1hDU8GwSRm2b1OvRm55zfrKeJhFVMShqUOC8hHNcgZZkQ5ZKieXqJ8y6wJyhFmwKYKrbjPWa6KXDkgicXASBWSVDM19PMqwSTx-TeYuVA~AEt~A0fucD0pqJj3mRNx1541EypLIYQBUExipQtI~YSMKo9tSV-k2-Q5Oq3z6dWzKQnG6bfTbcaiu0u6ibf2OysncmWwISEvSBOPJCVZPBs2XgVCswd1l7Byyc420kG1NPB1nfFBkJL6FiKXGi0s7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "2",
      url: "https://s3-alpha-sig.figma.com/img/ee40/454b/d930628b627e3eacbd0d434a3e49d058?Expires=1641772800&Signature=IBW1cXmchL98rGTtL0HpgolQ15Z8nTXGWQxYflpK-Oc1QL84qJb9m-KCOdQuXSu7KErVB1lxQKxT9wgL3oUd7GrSnqp1L5o7Oke--Q0zjcsDIh-MBH0U70TA~XfKFETCBsj-KTKZKgapBeLDuZPosbdMfwhmxMjmaZ2I4LLqX2TzcL-GBUg8Hvr5iqeRHe4b-4u1T-QfHtxs-ZLz3zlbwb0Hj71TcuxVIgLMoOJXuFzzsAhlCgkP1GBO3mB7eb2JYlkiFT5SORHm1wHc4LUuxCBUg4WfnwNxw7vklWafOBGLpCyCqu2U2FdG0EDTUWdho-iEfnxZBTNr8wzlyXke~Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "3",
      url: "https://s3-alpha-sig.figma.com/img/1f42/73e5/554422494f7a6c8e1d131680601e1181?Expires=1641772800&Signature=WM0h0fhujb8l7EwuBmlczFSCbhZwDyUzCAHoDUZ9hpgl2XVCeQ3VvUXagIZiBRwvbZLwyoNKzwswK~cj84g9nio2MEj76hl4DWkbw0MsFxihpl7fRvHb9laOmef9kASTWZ~A100jGcau1IT4aj61W~1rdwNGGuHlPsE5~CQ-jcBKwOJBCb2Dik1X5MGI0pLNOFvA-H0R1zg7jIQojhzbp3MVKk3nSOILdq7Mmw4pDSPyz5RJS1dP3YQpvK7MwogTRoKY~iHd~jMdzaCUdfiJbrwLfUE4Z~rK7NFHV1c6ELcrI2NBhO7PQ4cXwp-Ov1lBNHtoY9ZPAKWdjxMkPgYPTA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "4",
      url: "https://s3-alpha-sig.figma.com/img/3243/6174/d88eaf4048e5ebe5542b2cb2317fc264?Expires=1641772800&Signature=I5Kz6CEa0fm2R~orD9ElL4n0xSueUfdpjl91JcxIFxbxxtMYRmErrTXOSaEEP-zUGw34pSnJ1lqbVwSnX6JHzh0Q7rsTck5ztnO~q-IQOjV7hp5OPNT4WsUi5FckFwPcdDBVcfjjt0UtrVVgMwBzr5WCNoWYeDuB4McBWaAb8VmqSkZlzyKH5tb1bwABIQWtfzK9CtXteJSAD701XPDrgAXolvPCfc9wmT90nFqrPrSzUEj79CPMl2rH8-okNPQc8le5q4UjSiIb1z-aOJAXq9mf47-vj54Qzcsr2STZ8rUn4rtw5hH7Uqll7TqqMX2QWoMNedzdJFcmfKN571I07g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "5",
      url: "https://s3-alpha-sig.figma.com/img/fb66/eb1c/8fa0a2e9e675b21a3761ec0a3fb60550?Expires=1641772800&Signature=VDD7TZ9knJcEJ6uVngQrBr~7NMKG3Ckpe2bCI5paDrEj61v0E1PadHTQPAneavj2QK8MaOxly8G87QRi0q2WjQAO~B2Ri-L2r6BHZn3-gvJjlfqgjQtNmhzZPfTwoxlJIPpRZNv5SBWcERzNIojJWWhhcgSEb7CIp~EXWX5VO8DIuvILsYUM1nRDm~M0KpBZPdBweBKQRBcbBSnoLtYtNeqFPRCHc6XR4KK4uzubarC4t2ZtMRCNAfWBpyrimScEPEhpvUqLnApK34A1owUcnbegjNQgPCcx1OEH3RaT21xQXgvulXGGmTCCwthxLdSuDZZ5d8-uEAc4m5DanNTxaQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "6",
      url: "https://s3-alpha-sig.figma.com/img/9a6e/1eec/3625f2c33e46ed3718c98165b3ade364?Expires=1641772800&Signature=MtS8yho8lcf4R45FfvmasI1jL12nq7PGpAgi~XdZ6pvsREmZbkVG~Wl1~AerFBcNKbpOsvSDMfUS9l7jHT~KDXR4e51IsZQEd9JbH6E~gGwe6R2UNTS5xddA7P2NoDaTqbnnLndVhBSKyyn4IFuCT5b~537U88OyKXD4m5if8qPMgCBBiuecoeAWXk9hvPyttk~h3LF5Z5oWSuXa-5psbg3ri0SLSbRAwr1Od4xXBQEXKLvm8syfsXSvqcvrwuheWU~2-XWIm8JnREHVCBaDRNtv7yLVhniPg2rwOpFLr~VqOPWn8jWmot55dfU2ZJ8QNLGtMUh-~DsXZO3pptLfqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "7",
      url: "https://s3-alpha-sig.figma.com/img/af5d/9b2b/7ca841fcee324502f7b0074f31bf7f11?Expires=1641772800&Signature=gtXuWwwHnezDhCWOniIfVyZplxvDLE38ThVNelwFQjV5LXtbi3fQHq~996ZpYrPs5pBS4K14nfvFmMFk~LIGiSIDLvx7ZrkRxtb2efFOLbdv8MlRDk1Hdu3wDJ7knlGsJi0inE94MVh4Uci4WIVQrqRDW8x-~AvP3NLTFIEBNoP0T8aZ6R3irDDB8qioGK9sZvCxl3pC7PX7hSuylHvxQEH9pDENvgJ-vITn83b3qvUGGXHE9TxbNQGkO4pnQabpNqz3~AmkY59Gd~mTqYRlKK-DsxLKqdxddLt-wJt0xpIB4tI9TV3NyIQ-n4NS31TAtSekfzx67WepJCurjCaj1A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "8",
      url: "https://s3-alpha-sig.figma.com/img/2b65/8ae7/a19c5d419dfa837d30df752f9ed7edd5?Expires=1641772800&Signature=UdsBuDLeyivJQekWLj~E9wvjoa3XQGVZl2l58HQlxsEB92DgOUgmv-EygEr-5iHghVB5GebxlEJOXFsm4UWIQvb6IULOxxB4q8klcXSEknieXCi~ZXEyhhNxmwTRvFPYg2qwHgOahTF3bm0dZT2Wr99t1KSmzsBwPTtLifemTCAVxcq8t4S4OfCsEYxgVfKhUnet040IhBKoNoOj9XX6aTupHTIgU6oCTuHQVGW58Lq7dV-L1BLz6HKzvkr357H1zDYxFKzEFCpq7Ezqr0wnGRaMeLNqSDprp7UA5JLRc1zCF7xWcMh~vfOQcKCdULXfgiCXEWY3bJ7W79CcJzh1Yg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "9",
      url: "https://s3-alpha-sig.figma.com/img/a6ba/a7a1/7021698deb3b73f50dedc04984a3199b?Expires=1641772800&Signature=g1T8vQFcBxFznQM6j3sKCp0TYgQKH3n1qgDsLnPxpTi-TH2WF0To0OX50rSb1m0vIlkK8AhMbZB0ZTVqEnFL1uMHDI~WUYhZSE0z7qn3ipM92dOhla4MGYF87EtsTfsIPRSZsjEF9BzWeDzgLxL59T3Jgbi8B1js-2UL81jRtEpD1OD33qAeH0G9L3u9x0SfOCynyKsAWFJSHxZUrLqSDK7BZvKz7LS8peTuB0QFveQuX6rdvdRwlWMpQBndt2O3B3mXB3oFD4rDO3u9chw~suESMIBM3wmTeAPkccoVZhEac2WCB4Ii6nkwyIqZdnvybE0waVhhxM0PcNMlmZP3eg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "10",
      url: "https://s3-alpha-sig.figma.com/img/75ad/167a/5d8f591e93d77a7dbc005d06872c4056?Expires=1641772800&Signature=OkBhdH-yPqx9J~8XmXHcKhtW4nq4WYRlgVpByzdZlMBxcC-AqeO2tQJ~K9gUdrGZStjW0zvYvqTQ0P7~9-6si7PuannnmCfNmIQy6xOgXMnNSYI8IuL5wxLRSBeDEmlFe47VA5cz26QyHKhQByNFpRxjeP4dbFR2miu8cXBOrFKm~c-kjZt7oSex94zJ8YFPBd80v5Y6zouqhV58QQkW5OVjbtp9W7R9nwhImAPwUpvAtYCkdgJvLLvVX0lZ~RsBdcQO5hxsDwVwXP1s2DHWcLNQbK5tQGRTOjYw-xTzhdtEtSi8BRZfhz3Z7g5qkK7sMCgyoCLUZEt-9UaSgzfrwA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "11",
      url: "https://s3-alpha-sig.figma.com/img/b7f0/f314/280dc8d5df563073f32bcf62e294ad52?Expires=1641772800&Signature=D3uI7JmWVOYWjjlkK3uZWAGtzIkbQgD6xDTZTqkIab1YTwLmXgpv46jjb7yFt9H9avkgep1yCnCxewfAHBGjimAtVB~po70xQ1VClcDbEpOYXuuSKsTMpqbq6HW1S46QXvDV-wlyiWjobEnalyEFzXLB1MzbLj5t~2X-6mzAXHAD6mYT217jBraVXqIkhKASrX0W7kk1dKMlWf57Xb4k-bl0TT8grM4HNpK4ALZwcJiouSjE6FIVcj4jv-~2T33-qZD0sYcF0DwbAHytKvAvaNyXwufaJydvXTQcPFzpIQ3RftSCyt0VNzhFyMwcLmw0PS5RfvZ3MYDl8IuI1MeClg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
    {
      id: "12",
      url: "https://s3-alpha-sig.figma.com/img/4b04/c223/8b0b64b3459aea4b86d252f4cc3d7c6b?Expires=1641772800&Signature=OooHiLvGfH-9dNU-x~Y-v9r0EiJu1zWsADJks0mXkAxUfqbvKfsAD0gKLf2XbxYeALcIryhTNopKIE~AVM859Ot0LuSt4p5v66BWoM~UjHZy78O~SuEkMb9vTm1oyk5jwQr-w0-QaocqPv3HoUcWWiLOSxHFH9zhC8s88DRY6sfXvWJDU-jxR6khrK7br2~jyLUwL0hI0PmPbFFTBh6UBEihJqYPdtddC3E2KBz6xO2uaJ~EMkEqrXr4x7BCcb3xFwxZ6VE6V9ZN5YYN0r2skaOt8GLb~4yIlm15CaBXJHLISBp4lOXmvSZG-kHU2fgGHF~bFUrR1EAhEb1CjixN3g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    },
  ]);
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={DATA}
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


