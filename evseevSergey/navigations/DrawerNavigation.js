import { createDrawerNavigator } from "@react-navigation/drawer";
import { View } from "react-native";
import Lab1 from "../screens/Lab1";
import Lab2 from "../screens/Lab2";
import Lab3 from "../screens/Lab3";
import Lab3Entries from "../screens/Lab3Entries";
import Lab4Auth from "../screens/Lab4Auth";
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#D9D9D9",
          width: "50%",
        },
        drawerItemStyle: {
          marginLeft: "-1%",
        },
        headerShown: "false",
        drawerActiveTintColor: "black",
        drawerActiveBackgroundColor: "rgb(245,245,245)",
        drawerInactiveTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
        headerTitleAlign: "center",
      }}
    >
      <Drawer.Screen name="Lab1" component={Lab1} />
      <Drawer.Screen name="Lab2" component={Lab2} />
      <Drawer.Screen name="Lab3" component={Lab3} />
      <Drawer.Screen name="Lab3Entries" component={Lab3Entries} />
      <Drawer.Screen name="Lab4Auth" component={Lab4Auth} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
