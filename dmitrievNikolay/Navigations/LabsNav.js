import Lab1 from "../screens/Lab1";
import Lab2 from "../screens/Lab2";
import Lab3 from "../screens/Lab3";
import Lab5 from "../screens/Lab5";
import { Provider } from "react-redux";
import { FontAwesome5 } from "react-native-vector-icons";
import { Entypo } from "react-native-vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import store from '../store';
const Tab = createBottomTabNavigator();

const LabsNav = () => {
  return (
    <Provider store={store}>
    <Tab.Navigator>
      <Tab.Screen name="Lab1" component={Lab1} options={{
          tabBarLabel: "Lab 1",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="crow" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Lab2" component={Lab2} options={{
          tabBarLabel: "Lab 2",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="dove" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Lab3" component={Lab3} options={{
          tabBarLabel: "Lab 3",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="dragon" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Lab5" component={Lab5} options={{
          tabBarLabel: "Lab 5",
          tabBarIcon: ({ color, size }) => (
            <Entypo name="baidu" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
    </Provider>
  );
};

export default LabsNav;