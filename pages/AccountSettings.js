import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import RequestCard from "../components/RequestCard";
import RecommendedServicesCarousel from "../components/RecommendedServicesCarousel";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
import useAppData from "../hooks/useAppData";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

const AccountSettings = () => {
  const tailwind = useTailwind();

  return (
    <ScrollView style={tailwind("flex px-4 py-4 bg-gray-100 bg-white")}>
      <View style={tailwind("flex flex-row justify-between items-center mb-4")}>
        <Text style={tailwind("font-semibold text-lg")}>Account settings</Text>
      </View>

      <View style={tailwind("p-4 border border-gray-200 rounded")}>
        <Text style={tailwind("font-semibold text-lg mb-2")}>My details</Text>
        <View>
          <FormInput
            label={"Name"}
            inputPlaceholder={"Name"}
            labelStyles={"text-gray-500 text-base font-semibold"}
          />
          <FormInput
            label={"Phone Number"}
            inputPlaceholder={"Telephone"}
            labelStyles={"text-gray-500 text-base font-semibold"}
          />
          <FormInput
            label={"Email"}
            inputPlaceholder={"Email"}
            labelStyles={"text-gray-500 text-base font-semibold"}
          />
        </View>
      </View>

      <View style={tailwind("mt-6")}>
        <FormButton text="Save changes" />
      </View>
    </ScrollView>
  );
};

export default AccountSettings;
