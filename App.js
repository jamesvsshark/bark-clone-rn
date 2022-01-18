import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Requests from "./pages/Requests";
import NewRequestModal from "./pages/NewRequestModal";
import RequestScreeningModal from "./pages/RequestScreeningModal";
import TabBarIcon from "./components/TabBarIcon";
import RequestDetails from "./pages/RequestDetails";
import { AppDataProvider } from "./hooks/useAppData";
import RequestDetailsHeader from "./components/RequestDetailsHeader";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
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
                <Stack.Screen
                  name="RequestScreeningModal"
                  component={RequestScreeningModal}
                />
              </Stack.Group>
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </AppDataProvider>
    </TailwindProvider>
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
        tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
      }}
    />
    <BottomTab.Screen
      name="Notifications"
      component={Requests}
      options={{
        tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
      }}
    />
    <BottomTab.Screen
      name="Settings"
      component={Requests}
      options={{
        tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
      }}
    />
  </BottomTab.Navigator>
);
