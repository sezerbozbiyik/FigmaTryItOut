import React,{useState} from 'react'
import MainContainer from './navigation/MainContainer'
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

let customFonts = async () => {
  await Font.loadAsync({
    "ChatsFont": require("./assets/fonts/FontsFree-Net-SFProText-Semibold.ttf"),
  });
};

export default function App(){
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
    <MainContainer></MainContainer>
  )
}
