import React, { useEffect, useState } from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import {router, useLocalSearchParams} from "expo-router"
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import Boll from '../components/BollGeneric';
import RestaurantCard from '../components/RestaurantCard';
import Search from '../components/Search';

export default function SearchListView() {
  const {texto, categoria} = useLocalSearchParams()

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#F3EFEA' }}>

        {/* Header */}
        <View style={styles.containerHeader}>
          <Boll style={styles.positionBoll} onPress={() => router.push('/')}>
            <MaterialCommunityIcons name="chevron-left" size={40} color="black" />
          </Boll>
        </View>
        <Search texto={texto} />

        <RestaurantCard texto={texto} categoria={categoria} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 'auto'

  },
  
  positionBoll: {
    marginTop: 60,
    marginBottom: 10,
    marginHorizontal: 20
  }
});