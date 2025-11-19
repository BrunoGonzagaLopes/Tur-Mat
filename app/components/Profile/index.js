// app/components/ProfileBola.jsx
import React, {useEffect, useState} from "react";
import { Image } from "react-native";
import Boll from "../BollGeneric";
import styles from "./style";
import UserEntity from "../../entities/User";
import {getUser} from "../../services/UsuarioSevice";

export default function ProfileBola({ uri, style, imageStyle, onPress }) {
    const [useario, setUseario] = useState(new UserEntity());

    useEffect(() => {
        const loadUser = async () => {
            const userPromice = await getUser();
            setUseario(userPromice);
        }

        loadUser();
    }, []);

  return (
    <Boll style={style} onPress={onPress}>
      <Image
        source={{ uri: useario.urlImagemPerfil }}
        style={[styles.imageBoll, imageStyle]}
        resizeMode="cover"
      />
    </Boll>
  );
};