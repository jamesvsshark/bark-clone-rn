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
      title: match.companyName,
    });
  }, []);

  return (
    <ScrollView style={tailwind("p-4 bg-white")}>
      <View style={tailwind("pb-6 border-b border-gray-300")}>
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
        <Text style={tailwind("text-xl font-medium mb-3")}>Reviews</Text>
        <Text style={tailwind("text-gray-500 font-medium leading-5")}>
          {match.about}
        </Text>
      </View>

      <View style={tailwind("mt-6")}>
        <Text style={tailwind("text-xl font-medium mb-3")}>Services</Text>
        <Text style={tailwind("text-gray-500 font-medium leading-5")}>
          {match.about}
        </Text>
      </View>
    </ScrollView>
  );
};

export default CompanyProfile;
