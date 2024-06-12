import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from "axios";

const register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };

    axios.post("http://localhost:3000/register", user)
      .then((response) => {
        Alert.alert("Registro exitoso", "Te has registrado correctamente");
        setEmail("");
        setPassword("");
        setName("");
      })
      .catch((error) => {
        Alert.alert("Error en el registro", "Ocurrió un error durante el registro");
        console.log("Error", error);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}>
      <View style={{ marginTop: 80 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#0066b2" }}>
          TASKIFY-APP
        </Text>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 20 }}>
            Registrarse en su cuenta
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View style={styles.inputContainer}>
            <Ionicons style={styles.icon} name="person" size={24} color="gray" />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.input}
              placeholder="Ingresa tu nombre"
            />
          </View>

          <View style={styles.inputContainer}>
            <MaterialIcons style={styles.icon} name="email" size={24} color="gray" />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
              placeholder="Ingresa tu correo electrónico"
            />
          </View>

          <View style={styles.inputContainer}>
            <AntDesign style={styles.icon} name="lock1" size={24} color="gray" />
            <TextInput
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              style={styles.input}
              placeholder="Ingresa tu contraseña"
            />
          </View>

          <View style={{ marginTop: 60 }} />

          <Pressable onPress={handleRegister} style={styles.button}>
            <Text style={styles.buttonText}>Registrarse</Text>
          </Pressable>

          <Pressable onPress={() => router.replace("/login")} style={{ marginTop: 15 }}>
            <Text style={{ textAlign: "center", fontSize: 15, color: "gray" }}>
              ¿Ya tienes una cuenta? Inicia sesión
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#E0E0E0",
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 30,
  },
  icon: {
    marginLeft: 8,
  },
  input: {
    color: "gray",
    marginVertical: 10,
    width: 300,
    fontSize: 17,
  },
  button: {
    width: 200,
    backgroundColor: "#6699CC",
    padding: 15,
    borderRadius: 6,
    marginLeft: "auto",
    marginRight: "auto",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
