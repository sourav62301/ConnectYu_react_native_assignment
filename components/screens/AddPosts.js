import { View, Text } from "react-native";
import React from "react";
import SafeAreaViewAndroid from "../safe-area/SafeAreaViewAndroid";

const Main = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>AddPosts Screen</Text>
    </View>
  );
};

const AddPosts = () => {
  return <SafeAreaViewAndroid Component={Main} />;
};

export default AddPosts;
