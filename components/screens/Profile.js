import { View, Text } from "react-native";
import React from "react";
import SafeAreaViewAndroid from "../safe-area/SafeAreaViewAndroid";
import { ProfileBody } from "../screenComponents/ProfileBody";
import BottomTabViews from "../screenComponents/BottomTabViews";

const Main = () => {
  return (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={{ width: "100%", padding: 10 }}>
        <ProfileBody
          name="Harsh Sharma"
          userName="harsh_sharma"
          profileImage={require(`../../storage/images/user2.jpeg`)}
          followers="0"
          following="0"
          connections="0"
          posts="0"
          media="0"
          userType="Student"
        />
      </View>
      <BottomTabViews />
    </View>
  );
};

const Profile = () => {
  return <SafeAreaViewAndroid Component={Main} />;
};

export default Profile;
