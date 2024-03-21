import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionic from "react-native-vector-icons/Ionicons";

const Posts = () => {
  const postInfo = [
    {
      userName: "Harsh Sharma",
      userType: "student",
      userImage: require(`../../storage/images/user2.jpeg`),
      postImage: require(`../../storage/images/post3.jpeg`),
      likes: 1213,
      isLiked: false,
      caption:
        "Step into seamless style and comfort with sleek UI/UX design for the ultimate shoe shopping...",
    },
    {
      userName: "Ankush Sharma",
      userType: "student",
      userImage: require(`../../storage/images/user2.jpeg`),
      postImage: require(`../../storage/images/post1.jpeg`),
      likes: 113,
      isLiked: false,
      caption:
        "Step into seamless style and comfort with sleek UI/UX design for the ultimate shoe shopping...",
    },
    {
      userName: "Harsh Sharma",
      userType: "student",
      userImage: require(`../../storage/images/user2.jpeg`),
      postImage: require(`../../storage/images/user2.jpeg`),
      likes: 233,
      isLiked: false,
      caption:
        "Step into seamless style and comfort with sleek UI/UX design for the ultimate shoe shopping...",
    },
    {
      userName: "Harsh Sharma",
      userType: "student",
      userImage: require(`../../storage/images/user2.jpeg`),
      postImage: require(`../../storage/images/abcd.jpg`),
      likes: 533,
      isLiked: false,
      caption:
        "Step into seamless style and comfort with sleek UI/UX design for the ultimate shoe shopping...",
    },
  ];

  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: "grey",
              borderBottomWidth: 0.1,
            }}
          >
            {/* *****  Header ***** */}
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                }}
              >
                <Image
                  source={data.userImage}
                  style={{
                    width: 45,
                    height: 45,
                    borderRadius: 100,
                  }}
                />
                <View
                  style={{
                    paddingLeft: 5,
                  }}
                >
                  <Text
                    style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                  >
                    {data.userName}
                  </Text>
                  <Text style={{ color: "white", fontSize: 14 }}>
                    {data.userType}
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#9fe7ed",
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  Following
                </Text>
                <Feather
                  name="more-vertical"
                  style={{ fontSize: 22, color: "white", marginLeft: 60 }}
                />
              </View>
            </View>
            {/* ****** Caption ****** */}
            <View
              style={{
                paddingHorizontal: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>
                {data.caption}{" "}
                <Text style={{ color: "#9fe7ed" }}>See more</Text>
              </Text>
            </View>
            {/* ***** Image ***** */}

            <View
              style={{
                marginVertical: 20,
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={data.postImage}
                style={{ width: "100%", height: 400 }}
              />
            </View>
            {/* Like Comment share and save */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 25,
                // paddingBottom: 15,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign
                    name={like ? "heart" : "hearto"}
                    style={{
                      paddingRight: 15,
                      fontSize: 20,
                      color: like ? "red" : "white",
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic
                    name="chatbox-ellipses-outline"
                    style={{ color: "white", fontSize: 20, paddingRight: 15 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity>
                  <Feather
                    name="navigation"
                    style={{ color: "white", fontSize: 20, paddingRight: 15 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather
                    name="bookmark"
                    style={{ color: "white", fontSize: 20 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            {/* Likes count */}
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
              }}
            >
              <Text style={{ color: "silver" }}>
                {like ? data.likes + 1 : data.likes} likes
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Posts;
