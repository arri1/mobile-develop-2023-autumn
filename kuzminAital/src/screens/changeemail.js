import { useEffect, useState } from "react";
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from "react-native";
import Toast from 'react-native-toast-message';
import { useNavigation } from "@react-navigation/native";
import { updateEmail, updatePassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function ChangeEmail() {
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [passwordsMatch, setPasswordsMatch] = useState('empty');
    const user = auth.currentUser;
    useEffect(() => {
        if (password1 === '') {
            setPasswordsMatch('empty')
            return;
        } if (password1 !== password2) {
            setPasswordsMatch('noEqual')
            return;
        }
        setPasswordsMatch('equal')


    }, [password1, password2])

    const nav = useNavigation();

    const handleSubmit = () => {
        try {
            if (passwordsMatch === 'equal') {
                updatePassword(user, password1);
                nav.push("Tab", { screen: "logout" });
                return;
            }

            if (passwordsMatch === 'empty') {
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: 'Password is empty'
                });
                return;
            }

            Toast.show({
                type: 'error',
                text1: 'Error',
                text2: 'Passwords not equal'
            });

        } catch (err) {
            console.log("Error:", err.message);
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TextInput
                    placeholder="New Password"
                    secureTextEntry
                    value={password1}
                    onChangeText={(text) => {
                        setPassword1(text);
                    }}
                    style={[styles.textInput, (passwordsMatch === 'empty' || passwordsMatch === 'noEqual') && styles.errorInput]}
                />
                <TextInput
                    placeholder="Repeat Password"
                    secureTextEntry
                    value={password2}
                    onChangeText={(text) => {
                        setPassword2(text);
                    }}
                    style={[styles.textInput, (passwordsMatch === 'empty' || passwordsMatch === 'noEqual') && styles.errorInput]}
                />
                {(passwordsMatch === 'empty' || passwordsMatch === 'noEqual') && <Text style={styles.errorText}>Пароли не совпадают</Text>}
                <TouchableOpacity
                    title="Change Password"
                    onPress={handleSubmit}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    title="Back"
                    onPress={() => nav.push("Tab", { screen: "Profile" })}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
    },
    textInput: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        width: 200
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
    },
    button: {
        backgroundColor: "blue",
        width: "100%",
        padding: 15,
        margin: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
    errorInput: {
        borderColor: "red",
        borderWidth: 2,
    },
    errorText: {
        color: "red",
        marginTop: 5,
    },
});
