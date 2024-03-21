import { View, Text } from "react-native";
import React from "react";
import SafeAreaViewAndroid from "../safe-area/SafeAreaViewAndroid";

const Main = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>Notifications Screen</Text>
    </View>
  );
};

const Notifications = () => {
  return <SafeAreaViewAndroid Component={Main} />;
};

export default Notifications;
