import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import tailwind from "tailwind-rn";
import { Ionicons } from '@expo/vector-icons'; 

const RequestCard = ({ request }) => {
  const navigation = useNavigation();

  const hasMatches = request.requestStatus === "MATCHED";
  const isClosed = request.requestStatus === "CLOSED";

  return (
    <View
      style={[
        tailwind("bg-white px-8 py-4 mt-4 rounded"),
        {
          shadowOffset: { width: 0, height: 5 },
          elevation: 5,
          shadowOpacity: 0.1,
          shadowRadius: 2,
          filter:
            "drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))",
        },
      ]}
    >
      <Text style={tailwind("text-center font-semibold text-xl")}>
        {request.requestCategory}
      </Text>
      <Text style={tailwind("text-center font-medium text-base text-gray-400")}>
        {new Date(request.requestDate).toDateString()}
      </Text>

      <View>
        {isClosed ? (
          <View style={tailwind("px-10 py-4 mt-10 rounded bg-gray-100")}>
            <Text style={tailwind("text-center font-bold text-gray-400")}>
              Your request has been closed
            </Text>
          </View>
        ) : hasMatches ? (
          <View style={tailwind("px-2 py-4 mt-4")}>
            <View style={tailwind("flex items-center")}>
              <Ionicons name="search-circle-outline" size={80} color="black" />
            </View>
            <Text style={tailwind("text-center font-bold mt-4 text-gray-400")}>
              We've got professionals ready and available!
            </Text>
          </View>
        ) : (
          <View style={tailwind("px-2 py-4 mt-4")}>
            <View style={tailwind("flex items-center")}>
              <Image
                style={[
                  tailwind("rounded-full mb-4"),
                  {
                    width: 75,
                    height: 75,
                    resizeMode: "contain",
                  },
                ]}
                source={request.matches[0]?.companyLogo}
              />
            </View>
            <Text style={tailwind("text-center font-bold mt-4 text-gray-400")}>
              {request.matches.length} professional is ready to assist you with
              your request.
            </Text>
          </View>
        )}
      </View>

      <View style={tailwind("mx-10 mb-8")}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Request details", { request })}
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
          <Text style={tailwind("text-center text-white text-lg font-medium")}>
            View {isClosed ? "request" : hasMatches ? "professionals" : "quote"}
          </Text>
        </TouchableOpacity>
      </View>

      {hasMatches && (
        <View
          style={tailwind(
            "mb-6 flex flex-row justify-between items-center mx-10"
          )}
        >
          <TouchableOpacity>
            <Text style={tailwind("text-center text-blue-600")}>
              Close Request
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={tailwind("text-center text-blue-600")}>
              I hired someone
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default RequestCard;
