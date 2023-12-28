import {View} from "react-native";
import {gql, useQuery} from "@apollo/client";

const TEST = gql`
    query GetLocations {
        findManyPost{
            id
            title
        }
    }
`;
const Lab4 = ()=>{
  const { loading, error, data } = useQuery(TEST);
  console.log(data)
  return <View>

  </View>
}

export default Lab4