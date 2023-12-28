import { useMemo, useState } from "react";
import { Button, Text, View } from "react-native";

const Lab3 = () => {
    const [count, setCount] = useState(1);

const list = [1, 4, 3, 2, 5];
const list2 = [1, 4, 3, 2, 5];
let sortCount = 0;
let sortCountUM = 0;
const sortList = () => {
  console.log("sort");
  sortCount++;
  return list.sort((a, b) => a - b);
};

const sortList2 = () => {
  console.log("sort2");
  sortCountUM++;
  return list2.sort((a, b) => a - b);
};

const Lab3 = () => {
  const [update, updateChange] = useState(false);

  const sortedList = sortList();
  const sortedList2 = useMemo(sortList2, []);

  console.log("app render");
  return (
    <View>
      <View>
        {sortedList.map((listItem) => (
          <Text key={listItem}>{listItem}</Text>
        ))}
        <Text>Count of sort without useMemo: {sortCount}</Text>
      </View>
      <View>
        {sortedList2.map((listItem) => (
          <Text key={listItem}>{listItem}</Text>
        ))}
        <Text>Count of sort with useMemo: {sortCountUM}</Text>
      </View>
      <Button onPress={() => updateChange(!update)} title={"update change"} />
    </View>
  );

  // return (
  //   <View>
  //     <View>
  //       {sortedList.map((listItem) => (
  //         <Text key={listItem}>{listItem}</Text>
  //       ))}
  //     </View>
  //     <Button onPress={() => updateChange(!update)} title={"update change"} />
  //   </View>
  // );
};
}

export default Lab3;