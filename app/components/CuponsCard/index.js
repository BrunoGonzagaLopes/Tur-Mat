import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';

export default function CuponsCard() {
  return (
          <TouchableOpacity style={styles.ContainerCard}>
            <LinearGradient
              colors={["#FEFEFB", "#F3F3F3"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.InfoCard}
            >
              <Image style={styles.ImageCupom} source={require('../../assets/images/icons/cupom.png')} />
              <View style={styles.ContainerTextInfoCard}>

                <Text style={styles.Value}>R$15,00 OFF </Text>
                   <Text style={styles.Info}>Válido em todos os estabelecimento cadastrados.</Text>
        
              </View>
            <View style={styles.ContainerInfoBuy}>
              <Text style={styles.TextValidity}>15 Dias</Text>
              <Text style={styles.TextCode}>HRK242DA</Text>
            </View>
            </LinearGradient>
          </TouchableOpacity>

  );
};

