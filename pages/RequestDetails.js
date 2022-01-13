import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tailwind from "tailwind-rn";
import MatchCard from "../components/MatchCard";
import Pluralize from "../utils/Pluralize";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import RecommendedServicesCarousel from "../components/RecommendedServicesCarousel";

const RequestDetails = ({ route, navigation }) => {
  const request = route.params.request;
  console.log(request);

  return (
    <SafeAreaView edges={["bottom"]}>
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

      <ScrollView style={tailwind("flex px-4 py-4 bg-gray-100")}>
        <View style={tailwind("mb-4")}>
          <Text style={tailwind("text-center font-semibold")}>
            {request.matches.length}
            <Pluralize
              singular={"match"}
              plural={"matches"}
              count={request.matches.length}
            />
          </Text>
        </View>

        <View>
          {request.matches.map((match) => (
            <MatchCard key={match.companyId} match={match} />
          ))}
        </View>

        <RecommendedServicesCarousel services={sampleRecommendedServices} />
      </ScrollView>

      {/* <View style={tailwind("mt-4")}>
        <Text style={tailwind("text-center text-lg font-semibold")}>
          Your responses
        </Text>
      </View> */}
    </SafeAreaView>
  );
};

export default RequestDetails;
