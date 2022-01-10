import React, { useState,useEffect } from "react";
import Auth from "./src/screens/auth/Auth";
import MainContainer from "./src/MainContainer";

import { auth } from "./firebase";

export default function App() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <Auth></Auth>;
  }

  return <MainContainer></MainContainer>;
}
