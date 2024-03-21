import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import Home from "./components/screens/Home";
import Search from "./components/screens/Search";
import AddPosts from "./components/screens/AddPosts";
import Notifications from "./components/screens/Notifications";
import Profile from "./components/screens/Profile";
import Status from "./components/screenComponents/Status";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
              size = focused ? size + 8 : size + 2;
              color = "white";
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "search-outline";
              color = "white";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "AddPosts") {
              iconName = focused ? "add-circle" : "add-circle";
              color = "#9fe7ed";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Notifications") {
              iconName = focused ? "notifications" : "notifications-outline";
              size = focused ? size + 8 : size + 2;
              color = "white";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person-outline";
              size = focused ? size + 8 : size + 2;
              color = "white";
            }
            //  else if (route.name === "Profile") {
            //   iconName = focused ? "account-circle" : "account-circle-outline";
            //   size = focused ? size + 8 : size + 2;
            // }

            return (
              <Ionic
                name={iconName}
                size={route.name === "AddPosts" ? size + 20 : size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="AddPosts" component={AddPosts} />
        <Tab.Screen name="Notifications" component={Notifications} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
