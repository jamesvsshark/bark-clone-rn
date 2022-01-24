import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

const FormButton = ({ text }) => {
  const tailwind = useTailwind();

  return (
    <View>
      <TouchableOpacity
        style={[
          tailwind("rounded-lg py-3 bg-blue-500"),
          {
            shadowOffset: { width: 0, height: 4 },
            elevation: 4,
            shadowOpacity: 0.1,
            shadowRadius: 2,
            filter:
              "filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
          },
        ]}
      >
        <Text style={tailwind("text-center text-white text-base font-medium")}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormButton;
