import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tailwind from "tailwind-rn";

const RequestDetailsHeader = ({ route, navigation }) => {
  const request = route.params.request;

  return (
    <View
      style={[
        tailwind("bg-white border-solid border-t border-b py-4"),
        {
          borderColor: "rgb(243, 244, 246)",
        },
      ]}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={tailwind("relative")}>
          <View style={tailwind("px-2 absolute")}>
            <Ionicons name="chevron-back" size={24} color="black" />
          </View>
          <View style={tailwind("")}>
            <Text style={tailwind("text-center text-lg font-bold")}>
              {request.requestCategory}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RequestDetailsHeader;
