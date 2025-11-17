import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";
import { login } from "../services/httpService";

export default function LoginScreen() {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    router.push(await login(email, senha));
  }

  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/images/icons/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Seja Bem-Vindo</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/view/RegisterView')}>
        <Text style={styles.registerText}>
          Não tem login? <Text style={styles.registerBold}>Cadastre-se</Text>
        </Text>
      </TouchableOpacity>

    </View>
  );
}



const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor: "#F3EFEA",
paddingHorizontal: 24,
},
logo: {
width: 500,
height: 160,
marginBottom: 20,
},
title: {
fontSize: 32,
fontWeight: "bold",
marginBottom: 30,
textAlign: "center",
},
input: {
width: "100%",
borderWidth: 1,
borderColor: "#ccc",
borderRadius: 12,
padding: 14,
marginBottom: 16,
fontSize: 16,
},
button: {
width: "100%",
backgroundColor: "#000",
padding: 16,
borderRadius: 12,
marginBottom: 14,
},
buttonText: {
textAlign: "center",
color: "#fff",
fontSize: 18,
fontWeight: "600",
},
registerText: {
color: "#000",
fontSize: 16,
},
registerBold: {
fontWeight: "bold",
},
});