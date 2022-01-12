import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import RequestCard from "../components/RequestCard";
import RecommendedServicesCarousel from "../components/RecommendedServicesCarousel";
// import { useTailwind } from "tailwind-rn";
import tailwind from "tailwind-rn";

const sampleRequests = [
  {
    requestId: "1",
    requestCategory: "Personal Trainer",
    requestDate: "Tue, 11 Jan 2022 17:47:15 GMT",
    requestStatus: "OPEN",
    matches: [
      {
        matchId: "1",
        matchLogo: require("../assets/trainer-logo.png"),
      },
    ],
  },
  {
    requestId: "2",
    requestCategory: "Handyman",
    requestDate: "Wed, 14 Jul 2021 17:47:15 GMT",
    requestStatus: "CLOSED",
    matches: [],
  },
];

const sampleRecommendedServices = [
  {
    category: "Mobile Software Development",
    thumbnailImage: require("../assets/mobile-dev.png"),
  },
  {
    category: "Security Guard Services",
    thumbnailImage: require("../assets/security.png"),
  },
  {
    category: "House Cleaning",
    thumbnailImage: require("../assets/cleaning.png"),
  },
];

const Requests = () => {
  // const tailwind = useTailwind();

  return (
    <ScrollView style={tailwind("flex px-4 py-4")}>
      <View style={tailwind("flex flex-row justify-between items-center")}>
        <Text style={tailwind("font-semibold text-lg")}>Your requests</Text>
        <TouchableOpacity
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
