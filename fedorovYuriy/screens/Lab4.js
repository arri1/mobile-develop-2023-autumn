import { View, StyleSheet } from "react-native";
import { gql, useQuery } from "@apollo/client";

const Lab4 = () => {
  return <View style={styles.container}></View>;
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
    backgroundColor: "rgb(221, 201, 180)",
  },
});
export default Lab4;
