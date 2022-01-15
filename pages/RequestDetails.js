import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tailwind from "tailwind-rn";
import MatchCard from "../components/MatchCard";
import Pluralize from "../utils/Pluralize";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import RecommendedServicesCarousel from "../components/RecommendedServicesCarousel";
import useAppData from "../hooks/useAppData";

const RequestDetails = ({ route, navigation }) => {
  const { sampleRecommendedServices } = useAppData();
  const request = route.params.request;

  return (
    <ScrollView>
      <SafeAreaView edges={["bottom"]}>
        <View style={tailwind("flex px-4 py-4 bg-gray-100")}>
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
        </View>

        {/* <View style={tailwind("mt-4")}>
        <Text style={tailwind("text-center text-lg font-semibold")}>
          Your responses
        </Text>
      </View> */}
      </SafeAreaView>
    </ScrollView>
  );
};

export default RequestDetails;
