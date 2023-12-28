import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  Text,
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
    setData(res.data.entries)
  };
  const refreshWithMemo = useCallback(async () => {
    setLoadingMemo(true);
    const res = await axios
      .get("https://api.publicapis.org/entries")
      .finally(() => setLoadingMemo(false));
    setDataMemo(res.data.entries)
  }, []);

  useEffect(() => {}, []);
  return (
    <SafeAreaView style={{ flex: 1, gap: 10 }}>
      <Button title={"Refresh"} onPress={() => {
        refresh()
        refreshWithMemo()
      }} />

      {loading ? (
        <ActivityIndicator />
      ) : (
        data.map((item, index) => {
          return (
            <Text style={{ color: "black" }} key={index}>
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
            <Text style={{ color: "black" }} key={index}>
              {item.Description}
            </Text>
          );
        })
      )}
    </SafeAreaView>
  );
};
export default Lab3Entries;
