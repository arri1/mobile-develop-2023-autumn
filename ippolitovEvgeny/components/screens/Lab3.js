import React, { useState, useMemo, useEffect } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  Text,
  StyleSheet,
  View,
} from "react-native";

const Lab3 = () => {
  const [data, setData] = useState([{ Description: "" }]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.publicapis.org/entries");
      const json = await response.json();
      console.log(json.count);
      return json.entries;
    } catch {
      return [];
    }
  };

  const refresh = async () => {
    setData(await fetchData());
  };

  const datamemo = useMemo(async () => await fetchData(), []);

  useEffect(() => {
    console.log(data[0]);
  }, [data]);

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.colorChangeButton} onPress={refresh}>
        <Text style={styles.text}>Обновить</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.colorChangeButton}
        onPress={async () => {
          setData(await datamemo);
        }}
      >
        <Text style={styles.text}>useMemo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.colorChangeButton}
        onPress={() => {
          setData([]);
        }}
      >
        <Text style={styles.text}>Удалить</Text>
      </TouchableOpacity>

      {data.map((d, i) => (
        <Text key={i}>{d.Description}</Text>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: "white",
  },
  colorChangeButton: {
    backgroundColor: "#1E78FF",
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

export default Lab3;
