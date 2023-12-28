import {
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

const Lab3Entries = () => {
  const [data, setData] = useState([]);
  const [dataMemo, setDataMemo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMemo, setLoadingMemo] = useState(false);
  const refresh = async () => {
    setLoading(true);
    const res = await axios
      .get("https://api.publicapis.org/entries")
      .finally(() => setLoading(false));
    setData(res.data.entries);
  };
  const refreshWithMemo = useCallback(async () => {
    setLoadingMemo(true);
    const res = await axios
      .get("https://api.publicapis.org/entries")
      .finally(() => setLoadingMemo(false));
    setDataMemo(res.data.entries);
  }, []);

  useEffect(() => {}, []);
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          refresh();
          refreshWithMemo();
        }}
        style={styles.button}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
          REFRESH
        </Text>
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{ alignItems: "center", marginTop: "5%" }}
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          data.map((item, index) => {
            return (
              <Text style={styles.text} key={index}>
                {item.Description}
              </Text>
            );
          })
        )}
        {loadingMemo ? (
          <ActivityIndicator />
        ) : (
          dataMemo.map((item, index) => {
            return (
              <Text style={styles.text} key={index}>
                {item.Description}
              </Text>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Lab3Entries;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "rgb(217,217,217)",
    alignItems: "center",
    marginTop: "-5%",
    flex: 1,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 15,
    width: "90%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  text: {
    color: "black",
    // borderWidth: 1,
    // borderColor: "black",
    // width: "95%",
    // height: "50%",
  },
});
