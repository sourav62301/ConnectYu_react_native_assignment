import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const Stories = () => {
  const navigation = useNavigation();

  const storyInfo = [
    {
      id: 1,
      name: "Your Story",
      image: require(`../../storage/images/user1.jpeg`),
    },
    {
      id: 2,
      name: "Sourav",
      image: require(`../../storage/images/user1.jpeg`),
    },
    {
      id: 2,
      name: "Rohit",
      image: require(`../../storage/images/user1.jpeg`),
    },
    {
      id: 3,
      name: "Dev",
      image: require(`../../storage/images/user1.jpeg`),
    },
    {
      id: 4,
      name: "Sidharat",
      image: require(`../../storage/images/user1.jpeg`),
    },
    {
      id: 5,
      name: "Sujal",
      image: require(`../../storage/images/user1.jpeg`),
    },
    {
      id: 6,
      name: "Virat",
      image: require(`../../storage/images/user1.jpeg`),
    },
    {
      id: 7,
      name: "Keya",
      image: require(`../../storage/images/user1.jpeg`),
    },
    {
      id: 8,
      name: "Raj",
      image: require(`../../storage/images/user1.jpeg`),
    },
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ paddingVertical: 30 }}
    >
      {storyInfo.map((data, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate("Status", {
                name: data.name,
                image: data.image,
              })
            }
          >
            <View
              style={{
                flexDirection: "column",
                paddingHorizontal: 8,
                position: "relative",
              }}
            >
              {data.id == 1 ? (
                <View
                  style={{
                    position: "absolute",
                    bottom: 22,
                    right: 10,
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
              ) : null}
              <View
                style={{
                  width: 68,
                  height: 68,
                  borderWidth: 1.8,
                  borderRadius: 100,
                  borderColor: data.id === 1 ? "black" : "#9fe7ed",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 8,
                }}
              >
                <Image
                  source={data.image}
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
                  opacity: data.id == 1 ? 1 : 0.7,
                }}
              >
                {data.name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default Stories;
