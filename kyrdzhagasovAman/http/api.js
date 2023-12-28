import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const $host = axios.create({
  baseURL: "http://192.168.0.2:5000/",
});

const $authHost = axios.create({
  baseURL: "http://192.168.0.2:5000/",
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${AsyncStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

// $authHost.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response.status === 401) {
//       const nav = useNavigation();
//       /*const win = window;
//         win.location = `/login`;*/
//       nav.push("Login");
//     }
//     if (error.response.status === 403) {
//       /*const win = window;
//           win.location = `/error`;*/
//       console.log("Error");
//     }
//   }
// );

export { $host, $authHost };
