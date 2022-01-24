import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Rating, AirbnbRating } from "react-native-ratings";

const CompanyProfile = ({ route, navigation }) => {
  const tailwind = useTailwind();
  //   const navigation = useNavigation();
  const match = route.params.match;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      ),
      //   title: match.companyName,
      title: null,
    });
  }, []);

  return (
    <View>
      <ScrollView style={tailwind("p-4 bg-white")}>
        <SafeAreaView edges={["bottom"]}>
          <View style={tailwind("pb-6 border-b border-gray-200")}>
            <View>
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
            </View>

            <View>
              <Text style={tailwind("text-2xl font-medium mb-3")}>
                {match.companyName}
              </Text>
              <View style={tailwind("flex flex-row items-center mb-2")}>
                <Ionicons name="location" size={18} color="black" />
                <Text style={tailwind("font-medium ml-1")}>
                  {match.companyLocation}
                </Text>
              </View>
            </View>

            <View style={tailwind("flex flex-row items-center mb-2")}>
              <AirbnbRating
                size={20}
                defaultRating={match.reviewData.averageRating}
                showRating={false}
                isDisabled
              />
              <Text>({match.reviewData.reviewsCount})</Text>
            </View>

            <View style={tailwind("flex flex-row")}>
              {match.categories.map((category, index) => (
                <View
                  style={tailwind("border border-gray-200 rounded-xl p-1 mr-2")}
                  key={index}
                >
                  <Text style={tailwind("text-gray-500 font-medium")}>
                    {category}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={tailwind("mt-6")}>
            <Text style={tailwind("text-xl font-medium mb-3")}>About</Text>
            <Text style={tailwind("text-gray-500 font-medium leading-5")}>
              {match.about}
            </Text>
          </View>

          <View style={tailwind("mt-6")}>
            <View style={tailwind("flex flex-row justify-between")}>
              <View>
                <Text style={tailwind("text-xl font-medium mb-3")}>
                  Reviews ({match.reviewData.reviewsCount})
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  style={tailwind(
                    "rounded border border-solid border-gray-300"
                  )}
                >
                  <Text style={tailwind("text-blue-600 py-2 px-3")}>
                    Leave a review
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={tailwind("mt-2")}>
              <AirbnbRating
                size={20}
                defaultRating={match.reviewData.averageRating}
                showRating={false}
                isDisabled
              />
              <Text
                style={tailwind(
                  "text-lg text-gray-500 font-medium mb-3 text-center"
                )}
              >
                {match.reviewData.reviewsCount} customer reviews
              </Text>
            </View>
          </View>

          <View style={tailwind("mt-6")}>
            <Text style={tailwind("text-xl font-medium mb-3")}>Services</Text>
            <Text style={tailwind("text-gray-500 font-medium leading-5")}>
              {match.about}
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>

      {/* <View style={tailwind("relative")}>
        <View
          style={tailwind(
            "absolute bottom-0 h-24 w-full bg-white py-4 px-2 border border-t border-gray-300"
          )}
        >
          <Text style={tailwind("text-center text-base font-medium")}>
            Get a <Text style={tailwind("underline")}>free quote</Text> from
            this professional
          </Text>
        </View>
      </View> */}
    </View>
  );
};

export default CompanyProfile;
