import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import tailwind from "tailwind-rn";

const RecommendedServicesCarousel = ({ services }) => {
  return (
    <View style={tailwind("flex mt-4 py-4 mb-4")}>
      <View style={tailwind("px-4 py-4")}>
        <Text style={tailwind("font-semibold text-lg")}>You may also need</Text>
      </View>

      <ScrollView horizontal>
        {services.map((service, index) => (
          <RecommendedServiceCard key={index} service={service} />
        ))}
      </ScrollView>
    </View>
  );
};

const RecommendedServiceCard = ({ service }) => (
  <TouchableOpacity
    style={[
      tailwind("border border-solid mx-4"),
      { borderColor: "rgb(215, 215, 215)" },
    ]}
  >
    <Image
      style={[
        {
          width: 303,
          height: 260,
          resizeMode: "cover",
        },
      ]}
      source={service.thumbnailImage}
    />
    <View style={tailwind("px-6 py-4")}>
      <Text style={tailwind("font-bold text-gray-500 text-base")}>
        {service.category}
      </Text>
    </View>
  </TouchableOpacity>
);

export default RecommendedServicesCarousel;
