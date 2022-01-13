import React from "react";
import { View, Text, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import tailwind from "tailwind-rn";

const NewRequestModal = () => {
  return (
    <SafeAreaView style={tailwind("flex")}>
      <View style={tailwind("justify-center items-center")}>
        <Text style={tailwind("text-lg font-semibold mb-10")}>
          Place a new request
        </Text>
      </View>

      <View style={tailwind("px-4")}>
        <View>
          <Text style={tailwind("text-lg font-semibold mb-2")}>
            What service do you need?
          </Text>
          <TextInput style={tailwind("bg-white rounded px-4 pt-2")} />
        </View>

        <View>
          <Text style={tailwind("text-lg font-semibold mb-2")}>
            Where do you need it?
          </Text>
          <TextInput style={tailwind("h-2")} value="" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewRequestModal;
