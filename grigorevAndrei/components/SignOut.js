import { auth } from "./firebase";

const SignOut = ({ navigation }) => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  handleSignOut();
  return;
};

export default SignOut;
