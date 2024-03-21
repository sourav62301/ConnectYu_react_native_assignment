import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import Entypo from "react-native-vector-icons/Entypo";
import { Button } from "react-native-paper";

export const ProfileBody = ({
  name,
  userName,
  profileImage,
  posts,
  followers,
  following,
  connections,
  media,
  userType,
}) => {
  const navigation = useNavigation();

  return (
    <View>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: 30,
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            Profile
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather
            name="menu"
            style={{
              fontSize: 25,
              color: "white",
              paddingHorizontal: 15,
            }}
          />
        </View>
      </View>

      {/* profile */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          paddingVertical: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            {followers}
          </Text>
          <Text style={{ color: "white" }}>Followers</Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
            {following}
          </Text>
          <Text style={{ color: "white" }}>Following</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            {connections}
          </Text>
          <Text style={{ color: "white" }}>Connections</Text>
        </View>

        {/* Image */}

        <View
          style={{
            flexDirection: "column",
            paddingHorizontal: 8,
            position: "relative",
          }}
        >
          <View
            style={{
              position: "absolute",
              left: 10,
              bottom: 22,
              zIndex: 1,
            }}
          >
            <Entypo
              name="circle-with-plus"
              style={{
                fontSize: 20,
                color: "#9fe7ed",
                backgroundColor: "black",
                borderRadius: 100,
              }}
            />
          </View>

          <View
            style={{
              width: 68,
              height: 68,
              borderWidth: 1.8,
              borderRadius: 100,
              borderColor: "#9fe7ed",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <Image
              source={profileImage}
              style={{
                resizeMode: "cover",
                width: "92%",
                height: "92%",
                borderRadius: 100,
              }}
            />
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 10,
              textAlign: "center",
              opacity: 1,
            }}
          >
            {userName}
          </Text>
        </View>
      </View>
      {/* end */}

      <View
        style={{
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>{name}</Text>
        <Text style={{ color: "white", fontSize: 16 }}>UI/UX designer</Text>
        <Text style={{ color: "grey", fontSize: 16 }}>{userType}</Text>
      </View>

      {/* end */}

      <View
        style={{
          paddingHorizontal: 15,
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <Button
          textColor="black"
          style={{
            backgroundColor: "#9fe7ed",
            marginVertical: 20,
            borderRadius: 15,
            marginRight: 20,
          }}
          // onPress={() => navigation.navigate("EditProfile")}
        >
          Edit Profile
        </Button>
        <Button
          textColor="black"
          style={{
            backgroundColor: "#9fe7ed",
            marginVertical: 20,
            borderRadius: 15,
          }}
        >
          View Saved
        </Button>
      </View>

      {/* End */}
    </View>
  );
};
