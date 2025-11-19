import { Image, StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import {useEffect, useState} from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// Componentes
import Boll from '../components/BollGeneric';
import Profile from '../components/Profile';
import ClientInfo from '../components/ClientInfo';
import ProfileMenu from '../components/cardConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserProfileView() {


  return (
    <View style={{ backgroundColor: '#F3EFEA', flex: 1 }}>
      
      {/* HEADER */}
      <LinearGradient
        colors={["#FAB418", "#FFB40C"]}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.yellowBox}
      >
        <Boll style={styles.componentBoll}>
          <Text onPress={() => router.push('/')}>
            <MaterialCommunityIcons name="chevron-left" size={40} color="black" /></Text>
        </Boll>
      </LinearGradient>

      <View style={{ alignItems: 'center', height: 80 }}>
        <Profile style={styles.profileCircle} />
        <Pressable style={styles.editPressable} onPress={() => router.push('/')}>
          <Image source={{ uri: "" }} />
        </Pressable>
      </View>
    
      {/* MAIN */}
      <ClientInfo />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ProfileMenu />
      </ScrollView>
      {/* FOOTER */}
      <Pressable onPress={() => {
          AsyncStorage.clear();
          router.push('view/LoginView');
      }}>
        <Text style={styles.LogOut}>Encerrar sessão</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  yellowBox: {
    height: 162,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 12,
  },
  componentBoll: {
    marginTop: 50,
    marginLeft: 25,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileCircle: {
    width: 150,
    height: 150,
    position: "relative",
    bottom: '50%',
    margin: 'auto',
  },
  editPressable:{
  position:'absolute',
  top:10,
  right:20,
  },
LogOut:{
  textAlign:'center',
  color:'#F0150E',
  paddingBottom: 20,
  fontSize:19

}
})