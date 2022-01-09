import React,{useState} from "react";
import MainContainer from "./src/MainContainer";
import Auth from "./src/screens/auth/Auth";

export default function App() {
  const [user, setuser] = useState(false)
  if (!user) {
    return (<Auth></Auth>)
  }
  return <MainContainer></MainContainer>;
}
