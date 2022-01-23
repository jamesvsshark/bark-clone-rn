import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTailwind } from "tailwind-rn";
import MatchCard from "../components/MatchCard";
import Pluralize from "../utils/Pluralize";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import RecommendedServicesCarousel from "../components/RecommendedServicesCarousel";
import useAppData from "../hooks/useAppData";

const RequestDetails = ({ route, navigation }) => {
  const tailwind = useTailwind();
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

          <View style={tailwind("mt-6 border-b border-gray-300")}>
            <Text style={tailwind("text-center text-base")}>
              Need something else?
            </Text>
            <View style={tailwind("mx-14 mb-8")}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Request details", { request })
                }
                style={[
                  tailwind("rounded-lg px-6 py-2 bg-blue-500 mt-4"),
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
                <Text
                  style={tailwind("text-center text-white text-lg font-medium")}
                >
                  Place new request
                </Text>
              </TouchableOpacity>
            </View>
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
