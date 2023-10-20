import React from "react";
import { View, Text } from "react-native";
import Estilo from "../../Styles/Result.js";


export default function ResultImc(props) {
  return (
    <View>
      <Text style={Estilo.text}>{props.ResultImc}</Text>
      <Text style={Estilo.number}>{props.menssageResultImc}</Text>
    </View>
  );
}