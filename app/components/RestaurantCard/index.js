import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import styles from './style';
import RestaurantService from '../../services/RestaurantService';

const RestaurantCard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRestaurants = async () => {
      const data = await RestaurantService.getAll();
      const sortedData = data.sort((a, b) => (a.distance || 0) - (b.distance || 0));

      setRestaurants(sortedData);
      setLoading(false);

    };

    loadRestaurants();
  }, []);

  if (loading) {
    return (
      <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <>
    <Text style={styles.textChamada}>Restaurantes para conhecer</Text>
    <FlatList
      data={restaurants}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.ContainerCard}>
          <LinearGradient
            colors={["#FEFEFB", "#F3F3F3"]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.RestaurantInfoCard}
          >
            <Image style={styles.RestaurantImageCard} source={{ uri: item.image }} />
            <View style={styles.ContainerTextInfoCard}>
              <Text style={styles.ValueInfo}>
                <Image source={require('../../assets/images/icons/Star.png')} style={{ width: 12, height: 12 }} /> {item.rating}
              </Text>
              <Text style={styles.Textname}>{item.name}</Text>
              {item.distance &&(
                <Text style={styles.Distance}>
                <Image source={require('../../assets/images/icons/marcador.png')} style={{ width: 10, height: 10 }} /> {item.distance} Km
              </Text>
              )}
                
              
              <Text style={styles.DescriptionCard}>{item.description}</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      )}
    />
    </>
  );
};

export default RestaurantCard;