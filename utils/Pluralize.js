import React from "react";
import { View, Text } from "react-native";

const Pluralize = ({ singular, plural, count }) => (
  <Text>{count > 1 ? " " + plural : " " + singular}</Text>
);

export default Pluralize;
