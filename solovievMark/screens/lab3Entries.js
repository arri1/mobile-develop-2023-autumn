import { useState, useMemo, useEffect } from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";

const Lab3Entries = () => {
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
    <>
      <FlatList
        data={[...data]}
        renderItem={({ item }) => (
          <Text style={{ lineHeight: 24 }}>{item.Description}</Text>
        )}
      />
      <View style={{ height: 8 }}></View>
      <View
        style={{
          paddingBottom: 16,
          display: "flex",
          gap: 8,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            setData(await datamemo);
          }}
        >
          <Text style={{ color: "white" }}>Обновить с memo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={refresh}>
          <Text style={{ color: "white" }}>Обновить без memo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setData([]);
          }}
        >
          <Text style={{ color: "white" }}>Удалить</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
});

export default Lab3Entries;
