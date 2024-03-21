import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";

const Status = ({ route, navigation }) => {
  const { name } = route.params;
  const { image } = route.params;
  return (
    <View
      style={{
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            // textAlign: "center",
            // marginTop: 20,
          }}
        >
          {name} Status
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionic
            name="close"
            style={{ fontSize: 30, color: "white", opacity: 0.7 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: "90%",
          width: "95%",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            height: "90%",
            width: "90%",
          }}
          source={image}
        />
      </View>
    </View>
  );
};

export default Status;
