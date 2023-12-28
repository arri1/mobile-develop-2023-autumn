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
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";

const Lab3 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.publicapis.org/entries");
      const json = await response.json();
      return json.entries;
    } catch {
      return [];
    }
  };

  const refresh = async () => {
    setData(await fetchData());
  };
  const memo = useMemo(async () => await fetchData(), []);

  useEffect(() => {
    console.log(data[0]);
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.blackcontainer}>
          <Button title="Refresh" onPress={refresh} />
          <Button
            title="UseMemo"
            onPress={async () => {
              setData(await memo);
            }}
          />
          <Button
            title="Delete"
            onPress={() => {
              setData([]);
            }}
          />
        </View>
        <View style={styles.whitecontainer}>
          <View
            style={{
              margin: 15,
            }}
          >
            {data.map((d, i) => (
              <Text
                key={i}
                style={{
                  color: "rgba(36, 24, 8, 1)",
                  fontFamily: "IBMPlexMono_400Regular",
                  fontSize: 12,
                }}
              >
                {d.API} {d.Description}
              </Text>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F6F1",
    alignItems: "center",
  },
  blackcontainer: {
    height: 202,
    margin: 22,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#241808",
    borderRadius: 25,
  },
  whitecontainer: {
    margin: 22,
    marginTop: 0,
    alignItems: "center",
    backgroundColor: "#ffff",
    borderRadius: 25,
  },
});

export default Lab3;
