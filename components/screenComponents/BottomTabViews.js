import { View, Text } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionic from "react-native-vector-icons/Ionicons";

const BottomTabViews = () => {
  const Tab = createMaterialTopTabNavigator();

  const Posts = () => {
    return (
      <View
        style={{
          paddingHorizontal: 10,
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            lineHeight: 40,
            textAlign: "center",
          }}
        >
          No posts
        </Text>
        <Text style={{ color: "grey", fontSize: 18, textAlign: "center" }}>
          All the posts that you will create will appear here
        </Text>
        <Text
          style={{
            color: "#9fe7ed",
            textAlign: "center",
            lineHeight: 45,
            fontSize: 18,
          }}
        >
          Share your first post
        </Text>
      </View>
    );
  };

  const Media = () => {
    return (
      <View
        style={{
          paddingHorizontal: 10,
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
            lineHeight: 40,
            textAlign: "center",
          }}
        >
          No media
        </Text>
        <Text style={{ color: "grey", fontSize: 18, textAlign: "center" }}>
          All the media that you have will appear here
        </Text>
        <Text
          style={{
            color: "#9fe7ed",
            textAlign: "center",
            lineHeight: 45,
            fontSize: 18,
          }}
        >
          Add media
        </Text>
      </View>
    );
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarShowLabel: false,
        tabBarIndicatorStyle: {
          backgroundColor: "silver",
          height: 1.5,
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === "Posts") {
            iconName = focused ? "reader" : "reader-outline";
          } else if (route.name === "Media") {
            iconName = focused ? "tv" : "tv-outline";
          }

          return (
            <Ionic name={iconName} color={color} style={{ fontSize: 25 }} />
          );
        },
      })}
    >
      <Tab.Screen name="Posts" component={Posts} />
      <Tab.Screen name="Media" component={Media} />
    </Tab.Navigator>
  );
};

export default BottomTabViews;
