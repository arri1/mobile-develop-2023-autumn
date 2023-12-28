import React, { useState, useMemo, useEffect, useCallback } from "react";
import {
  Text,
  ActivityIndicator,
  SafeAreaView,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import MemoButton from "../components/buttons/MemoButton";
import axios from "axios";

const Lab3 = () => {
  const [data, setData] = useState([]);
  const [dataMemo, setDataMemo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMemo, setLoadingMemo] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerMemo, setTimerMemo] = useState(0);
  const refresh = async () => {
    const start = Date.now();
    setLoading(true);
    const res = await axios
      .get("https://api.publicapis.org/entries")
      .finally(() => setLoading(false));
    setData(res.data.entries);
    setTimer(Date.now() - start);
  };
  const refreshWithMemo = useCallback(async () => {
    const start = Date.now();
    setLoadingMemo(true);
    const res = await axios
      .get("https://api.publicapis.org/entries")
      .finally(() => setLoadingMemo(false));
    setDataMemo(res.data.entries);
    setTimerMemo(Date.now() - start);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textContainer}>
          Время загрузки без useMemo: {timer} ms
        </Text>
        <Text style={styles.textContainer}>
          Время загрузки с useMemo: {timerMemo} ms
        </Text>
      </View>
      <MemoButton
        text={"Обновить"}
        onPress={() => {
          refresh();
          refreshWithMemo();
        }}
      />
      <ScrollView style={styles.dataContainer}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          data.map((item, index) => {
            return (
              <Text style={{ color: "black", fontSize: 14 }} key={index}>
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
              <Text style={{ color: "black", fontSize: 14 }} key={index}>
                {item.Description}
              </Text>
            );
          })
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AD66D5",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    fontSize: 16,
  },
  dataContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "#FFFFFF",
    padding: 10,
    marginBottom: 80,
    borderRadius: 10,
  },
});

export default Lab3;
