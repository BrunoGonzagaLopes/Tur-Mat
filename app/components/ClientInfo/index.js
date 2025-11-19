import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import {getUser} from "../../services/UsuarioSevice";

export default function ClientCard() {
    const [useario, setUseario] = useState();

    useEffect(() => {
        async function loadUser() {
            const userPromice = await getUser();
            setUseario(userPromice);
        }

        loadUser();
        console.log(useario);
    }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{useario.nome}</Text>
      <Text style={styles.info}>{useario.telefone}</Text>
      <Text style={styles.info}>{useario.email}</Text>
    </View>
  );
};