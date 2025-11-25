import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './style';
import { getCardapio } from '../../services/RestaurantService';

const FoodTruckCard = ({data}) => {
  const [foodTruck, setfoodTruck] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  const loadfoodTruck = async () => {
    try {
      const response = await getCardapio(data);
      setfoodTruck(response);
    } catch (error) {
      console.error("Erro ao buscar cardápio:", error);
    } finally {
      setLoading(false);
    }
  };

  loadfoodTruck();
}, [data]); 


  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <FlatList
      data={foodTruck}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.ContainerCard}>
          <LinearGradient
            colors={["#FEFEFB", "#F3F3F3"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.InfoCard}
          >
            <Image style={styles.ImageCard} source={{ uri: item.image }} />

            <View style={styles.ContainerTextInfoCard}>
              <Text style={styles.ValueInfo}>R$ {item.preco}</Text>
              <Text style={styles.Textname}>{item.name}</Text>
              <Text style={styles.DescriptionCard}>{item.descricao}</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      )}
    />
  );
};

export default FoodTruckCard;
