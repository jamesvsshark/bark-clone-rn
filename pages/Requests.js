import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import RequestCard from "../components/RequestCard";
import RecommendedServicesCarousel from "../components/RecommendedServicesCarousel";
// import { useTailwind } from "tailwind-rn";
import tailwind from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
import useAppData from "../hooks/useAppData";

const Requests = () => {
  // const tailwind = useTailwind();
  const { sampleRequests, sampleRecommendedServices } = useAppData();
  const navigation = useNavigation();

  return (
    <ScrollView style={tailwind("flex px-4 py-4 bg-gray-100")}>
      <View style={tailwind("flex flex-row justify-between items-center")}>
        <Text style={tailwind("font-semibold text-lg")}>Your requests</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("NewRequestModal")}
          style={[
            tailwind("rounded border border-solid"),
            { borderColor: "rgb(215, 215, 215)" },
          ]}
        >
          <Text style={tailwind("text-blue-600 py-2 px-3")}>
            Place new request
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {sampleRequests.map((request) => (
          <RequestCard key={request.requestId} request={request} />
        ))}
      </View>

      <RecommendedServicesCarousel services={sampleRecommendedServices} />
    </ScrollView>
  );
};

export default Requests;
