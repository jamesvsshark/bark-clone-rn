import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// import { useTailwind } from "tailwind-rn";
import tailwind from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  // const tailwind = useTailwind();

  return (
    <SafeAreaView edges={["top", "left", "right"]}>
      <View style={tailwind("flex flex-row px-4 justify-between items-center")}>
        <View>
          <Image
            style={{
              width: 80,
              height: 80,
              resizeMode: "contain",
            }}
            source={require("../assets/barklogo.png")}
          />
        </View>
        {/* <View style={tailwind("flex flex-row")}>
          <TouchableOpacity>
            <Ionicons
              style={tailwind("mx-2 text-gray-300")}
              name="notifications"
              size={24}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              style={tailwind("mx-2")}
              name="ios-menu-outline"
              size={24}
            />
          </TouchableOpacity>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default Header;
