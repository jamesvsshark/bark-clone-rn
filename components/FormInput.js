import { View, Text, TextInput } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";

const FormInput = ({
  label,
  inputPlaceholder,
  labelStyles = "text-lg font-semibold",
  ...other
}) => {
  const tailwind = useTailwind();

  return (
    <View style={tailwind("mb-4")}>
      <Text style={tailwind(`${labelStyles} mb-2`)}>{label}</Text>

      <TextInput
        placeholder={inputPlaceholder}
        style={tailwind(
          "text-base p-2 h-11 border border-gray-300 rounded-lg font-medium"
        )}
        {...other}
      />
    </View>
  );
};

export default FormInput;
