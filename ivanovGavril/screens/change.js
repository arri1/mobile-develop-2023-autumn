import { TouchableOpacity, View } from "react-native-web";
import { auth } from "./firebase";
import { EmailAuthProvider } from "@firebase/auth";

const ChangePassword = () => {
  const HandleChangePassword = async () => {
    const currentPass = window.prompt("Please enter current password");
    const newPass = window.prompt("Please enter new password");
    await auth.currentUser.updatePassword(newPass).then(() => {
      auth.currentUser.reauthenticateWithCredential(
        EmailAuthProvider.credential(auth.currentUser.email, currentPass)
      );
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={HandleChangePassword}>
        Change password
      </TouchableOpacity>
    </View>
  );
};
export default ChangePassword;
