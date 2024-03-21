import { View, Text, StatusBar, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import SafeAreaViewAndroid from "../safe-area/SafeAreaViewAndroid";
import Stories from "../screenComponents/Stories";
import Posts from "../screenComponents/Posts";

const Main = () => {
  return (
    <View style={{}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />

      {/* ***********Header*********** */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 25,
        }}
      >
        <Text style={{ color: "white", fontWeight: 800, fontSize: 30 }}>
          ConnectYu
        </Text>
        <Icon name="comment-dots" size={30} color="white" />
      </View>

      {/* ********************* */}
      <ScrollView>
        <Stories />
        <Posts />
      </ScrollView>
    </View>
  );
};

const Home = () => {
  return <SafeAreaViewAndroid Component={Main} />;
};

export default Home;
