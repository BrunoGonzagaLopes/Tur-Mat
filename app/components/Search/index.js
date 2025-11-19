import React, {useEffect, useState} from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import {router} from "expo-router";

const Search = ({ placeholder, onSearch, texto }) => {
  const [text, setText] = useState('');

  useEffect(() => {
      setText(texto);
  }, [])

  const handleSearch = () => {
      router.push({pathname: '/view/SearchListView', params: {texto: text}})
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder={placeholder || "Pesquisar..."}
        placeholderTextColor="#888"
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.iconButton}>
        <Image
          source={require('../../assets/images/icons/iconpesquisa.png')} 
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search