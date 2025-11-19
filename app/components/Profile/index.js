// app/components/ProfileBola.jsx
import React from "react";
import { Image } from "react-native";
import Boll from "../BollGeneric";
import styles from "./style";

export default function ProfileBola({ uri, style, imageStyle, onPress }) {
  return (
    <Boll style={style} onPress={onPress}>
      <Image
        source={{ uri: uri }}
        style={[styles.imageBoll, imageStyle]}
        resizeMode="cover"
      />
    </Boll>
  );
};