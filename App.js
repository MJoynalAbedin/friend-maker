import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import Constants from "expo-constants";
import Topbar from "./Components/Topbar/Topbar";
import axios from "axios";
import SwipeImage from "./Components/SwipeImage/SwipeImage";
import BottomBar from "./Components/BottomBar/BottomBar";
import Swipes from "./Components/Swipes/Swipes";

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function getUsers() {
    try {
      const { data } = await axios.get(
        "https://randomuser.me/api/?gender=male&results=50"
      );
      setUsers(data.results);
    } catch (error) {
      console.log(error);
      Alert.alert("Error getting users", "", [
        { text: "Retry", onPress: () => getUsers() },
      ]);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Topbar />
      <View style={styles.swipes}>
        {users.length > 1 && <Swipes></Swipes>}
      <BottomBar/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  
});
