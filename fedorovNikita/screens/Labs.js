import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";

const Tab = createBottomTabNavigator();

const Labs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Lab1" component={Lab1} />
      <Tab.Screen name="Lab2" component={Lab2} />
      <Tab.Screen name="Lab3" component={Lab3} />
      <Tab.Screen name="Lab4" component={Lab4} />
      <Tab.Screen name="Lab5" component={Lab5} />
    </Tab.Navigator>
  );
}

export default Labs;