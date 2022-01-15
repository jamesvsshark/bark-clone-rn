import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Requests from "./pages/Requests";
import NewRequestModal from "./pages/NewRequestModal";
import TabBarIcon from "./components/TabBarIcon";
import tailwind from "tailwind-rn";
import RequestDetails from "./pages/RequestDetails";
import { AppDataProvider } from "./hooks/useAppData";
import RequestDetailsHeader from "./components/RequestDetailsHeader";
// import { useTailwind, TailwindProvider } from "tailwind-rn";
// import utilities from "./tailwind.json";
// import "./tailwind.css/";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  // const tailwind = useTailwind();

  return (
    // <TailwindProvider utilities={utilities}>
    <AppDataProvider>
      <SafeAreaProvider>
        <StatusBar style="auto" />
        <Header />

        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Root"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Root"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Group
              screenOptions={{ presentation: "modal", gestureEnabled: false }}
            >
              <Stack.Screen
                name="NewRequestModal"
                component={NewRequestModal}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </AppDataProvider>
    // </TailwindProvider>
  );
}

const RequestNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Requests"
      component={Requests}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Request details"
      component={RequestDetails}
      options={() => ({
        header: (props) => <RequestDetailsHeader {...props} />,
      })}
    />
  </Stack.Navigator>
);

{
  /* <Text>{route.params.request.requestCategory}</Text> */
}
{
  /* <Text>Left</Text> */
}

const BottomTabNavigator = () => (
  <BottomTab.Navigator
    initialRouteName="My requests"
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: "#e91e63",
    }}
  >
    <BottomTab.Screen
      name="My requests"
      component={RequestNavigator}
      options={{
        // tabBarLabelStyle: tailwind("text-gray-500"),
        tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
      }}
    />
    <BottomTab.Screen
      name="Notifications"
      component={Requests}
      options={{
        // tabBarLabelStyle: tailwind("text-gray-500"),
        tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
      }}
    />
    <BottomTab.Screen
      name="Settings"
      component={Requests}
      options={{
        // tabBarLabelStyle: tailwind("text-gray-500"),
        tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
      }}
    />
  </BottomTab.Navigator>
);
