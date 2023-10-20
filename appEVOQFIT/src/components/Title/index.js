import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Estilo from "../Styles/Title";

export default function Title() {
  return (
    <View style={Estilo.boxTitle}>
      <View style={Estilo.boxTitle1}>
        <Text style={Estilo.textTitle}>EVOQFIT</Text>
      </View>

      
    </View>
  );
}
