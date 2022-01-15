import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import tailwind from "tailwind-rn";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getSampleAvailableServices } from "../api/Services";

const NewRequestModal = () => {
  const [query, setQuery] = useState("");
  const [serviceSearchResults, setServiceSearchResults] = useState([]);

  const navigation = useNavigation();

  const onServiceSearchTextChange = async (text) => {
    setQuery(text);
    const results = await getSampleAvailableServices(text);
    setServiceSearchResults(results);
  };

  const onServiceSelected = (item) => {
    setQuery(item.title);
    setServiceSearchResults([]);
  };

  return (
    <View style={tailwind("flex flex-1 bg-white")}>
      <View style={tailwind("flex flex-row justify-end px-2 py-4")}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} style={tailwind("text-gray-400")} />
        </TouchableOpacity>
      </View>

      <View style={tailwind("justify-center items-center")}>
        <Text style={tailwind("text-lg font-semibold mb-10")}>
          Place a new request
        </Text>
      </View>

      <View style={tailwind("px-4")}>
        <View style={tailwind("mb-8")}>
          <Text style={tailwind("text-lg font-semibold mb-2")}>
            What service do you need?
          </Text>

          <TextInput
            placeholder="e.g Handyman, House Cleaning"
            value={query}
            onChangeText={onServiceSearchTextChange}
            style={tailwind(
              "text-base p-2 h-11 border border-gray-300 rounded-lg font-medium"
            )}
          />

          <View>
            <FlatList
              data={serviceSearchResults}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onServiceSelected(item)}>
                  <Text
                    style={tailwind("p-2 text-lg text-gray-500 font-medium")}
                  >
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>

        <View style={tailwind("mb-8")}>
          <Text style={tailwind("text-lg font-semibold mb-2")}>
            Where do you need it?
          </Text>
          <TextInput
            placeholder="Enter ZIP code or town/city"
            style={tailwind(
              "text-base p-2 h-11 border border-gray-300 rounded-lg font-medium"
            )}
          />
        </View>

        <View style={tailwind("mx-10")}>
          <TouchableOpacity
            style={[
              tailwind("rounded-lg px-6 py-2 bg-blue-500 mt-4 mb-12"),
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
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewRequestModal;
