import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Requests from "./pages/Requests";
import tailwind from "tailwind-rn";
// import { useTailwind, TailwindProvider } from "tailwind-rn";
// import utilities from "./tailwind.json";
// import "./tailwind.css/";

const Stack = createNativeStackNavigator();

export default function App() {
  // const tailwind = useTailwind();

  return (
    // <TailwindProvider utilities={utilities}>
    <SafeAreaProvider>
      <SafeAreaView style={tailwind("flex-1")}>
        <StatusBar style="auto" />
        {/* Header */}
        <Header />

        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Your requests" component={Requests} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* Your requests */}

        {/* Recommendations Carrousel */}
      </SafeAreaView>
    </SafeAreaProvider>
    // </TailwindProvider>
  );
}
