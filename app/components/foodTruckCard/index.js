import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import { useRouter } from 'expo-router';
import { getAllHTTP } from '../../services/RestaurantService';

const foodTruckCard = ({ data }) => {
  const [foodTruck, setfoodTruck] = useState(data || []);
  const [loading, setLoading] = useState(!data);
  const router = useRouter();

  useEffect(() => {
    if (data) return;

    const loadfoodTruck = async () => {
      setLoading(true);
      let dados = { distancia: 10000 }
      const response = await getAllHTTP(dados);
      console.log(response);
      setfoodTruck(response);
      setLoading(false);
    };

    loadfoodTruck();
  }, []);


  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

 
  return (
    < >
          <TouchableOpacity style={styles.ContainerCard}>
            <LinearGradient
              colors={["#FEFEFB", "#F3F3F3"]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              style={styles.InfoCard}
            >
              <Image style={styles.ImageCard} source={require('../../assets/images/icons/Star.png')} />
              <View style={styles.ContainerTextInfoCard}>
                <Text style={styles.ValueInfo}> R$ 15,00
                </Text>
                <Text style={styles.Textname}>Self Service</Text>
              

                <Text style={styles.DescriptionCard}>Restaurante moderno, ambiente acolhedor, sabores únicos, atendimento excepcional e pratos frescos preparados com ingredientes selecionados.</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        
    </>
  );
};

export default foodTruckCard;