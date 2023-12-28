import { useCallback, useEffect, useState, useMemo } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
  useMe,
} from "react-native";
import axios from "axios";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "../components/Button";
import { useQuery, gql } from "@apollo/client";

const Lab4 = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default Lab4;
