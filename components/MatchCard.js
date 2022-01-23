import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import { useTailwind } from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MatchCard = ({ match }) => {
  const tailwind = useTailwind();
  const navigation = useNavigation();

  return (
    <View
      style={[
        tailwind("bg-white px-6 py-4 mt-4 rounded"),
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
      <View>
        <View style={tailwind("flex flex-row justify-between items-start")}>
          <Image
            style={[
              tailwind("rounded-full mb-4"),
              {
                width: 75,
                height: 75,
                resizeMode: "contain",
              },
            ]}
            source={match.companyLogo}
          />

          <View style={tailwind("flex flex-row items-center")}>
            <AirbnbRating
              size={20}
              defaultRating={match.reviewData.averageRating}
              showRating={false}
              isDisabled
            />
            <Text>({match.reviewData.reviewsCount})</Text>
          </View>
        </View>

        <Text style={tailwind("font-semibold text-xl")}>
          {match.companyName}
        </Text>

        <View style={tailwind("mt-2")}>
          {match.highlightedServices.map((service, index) => (
            <View
              key={index}
              style={tailwind("flex flex-row items-center py-1")}
            >
              <Ionicons name="checkbox-outline" size={24} color="black" />
              <Text style={tailwind("ml-1")}>{service}</Text>
            </View>
          ))}
        </View>

        <View style={tailwind("flex flex-row mt-4 justify-between")}>
          <View style={tailwind("flex-1 mx-0.5")}>
            <TouchableOpacity
              onPress={() => navigation.navigate("CompanyProfile", { match })}
              style={[
                tailwind("rounded-lg px-6 py-2 border bg-white"),
                { borderColor: "rgb(59, 130, 246)" },
              ]}
            >
              <Text
                style={tailwind(
                  "text-center text-blue-500 text-base font-medium"
                )}
              >
                View profile
              </Text>
            </TouchableOpacity>
          </View>
          <View style={tailwind("flex-1 mx-0.5")}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Request details", { request })
              }
              style={[
                tailwind("rounded-lg px-6 py-2 border bg-white"),
                { borderColor: "rgb(59, 130, 246)" },
              ]}
            >
              <Text
                style={tailwind(
                  "text-center  text-blue-500 text-base font-medium"
                )}
              >
                Contact
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={tailwind("my-2")}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Request details", { request })}
            style={[
              tailwind("rounded-lg px-6 py-2 bg-blue-500"),
              // { borderColor: "rgb(59, 130, 246)" },
            ]}
          >
            <Text
              style={tailwind("text-center text-white text-base font-medium")}
            >
              Request quote
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MatchCard;
