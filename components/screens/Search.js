import { View, Text } from "react-native";
import React from "react";
import SafeAreaViewAndroid from "../safe-area/SafeAreaViewAndroid";

const Main = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>Search Screen</Text>
    </View>
  );
};

const Search = () => {
  return <SafeAreaViewAndroid Component={Main} />;
};

export default Search;
