import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Vibration  } from "react-native";
import ResultImc from "./ResultImc/resultimc";
import Estilo from "../Styles/Form";

export default function Form() {
const [height, setHeight] = useState(null)
const [weight, setWeight] = useState(null) 
const [messageImc, setMessageImc] = useState("Preencha o peso e altura"); 
const [imc, setImc] = useState(null)
const [textButton, setTextButton] = useState("Calcular")
const [errorMessage, setErrorMessage] = useState(null)

function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2))
//     if (imc < 18.5) {
//     return {
//       valor: imc,
//       classificacao: "Baixo peso",
//     };
//   } else if (imc >= 18.5 && imc < 25.0) {
//     return {
//       valor: imc,
//       classificacao: "Peso normal",
//     };
//   } else if (imc >= 25.0 && imc < 30.0) {
//     return {
//       valor: imc,
//       classificacao: "Excesso de peso",
//     };
//   } else if (imc >= 30.0 && imc < 35.0) {
//     return {
//       valor: imc,
//       classificacao: "Obesidade de Classe 1",
//     };
//   } else if (imc >= 35.0 && imc < 40.0) {
//     return {
//       valor: imc,
//       classificacao: "Obesidade de Classe 2",
//     };
//   } else {
//     return {
//       valor: imc,
//       classificacao: "Obesidade de Classe 3",
//     };
//   }
// }

}

function verificationImc (){
  if(imc == null){
      Vibration.vibrate()
      setErrorMessage("Campo Obrigatório*")
  }
}


function validationImc(){
    if(weight != null && height != null){
        imcCalculator()
        setHeight(null)
        setHeight(null)
        setMessageImc("Seu IMC é:")
        setTextButton("Calcular novamente")
        setErrorMessage(null)
        return
        
    }
    verificationImc()
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha com seu peso e altura")
  
}


  return (
    <View style={Estilo.formContext}>
      <View style={Estilo.form}>
  
      <View style={Estilo.boxTitle1}>
        <Text style={Estilo.textTitle}>Calculadora de IMC</Text>
      </View>
        <Text style={Estilo.formLabel}>Altura</Text>
        <Text style={Estilo.errorMessage} >{errorMessage}</Text>
        <TextInput 
         style={Estilo.input}
        onChangeText={setHeight} 
        value={height}
        placeholder="Ex. 1,75" 
        keyboardType="numeric">
        </TextInput>

        <Text style={Estilo.formLabel}>Peso</Text>
        <Text style={Estilo.errorMessage} >{errorMessage}</Text>

        <TextInput 
        style={Estilo.input}
        onChangeText={setWeight}
        value={weight}
        placeholder="Ex. 75,365"
        keyboardType="numeric">
          
        </TextInput>
  
        <TouchableOpacity onPress={() => validationImc()}
           style={Estilo.button}>
               <Text style={Estilo.textButton}>{textButton}</Text>
            </TouchableOpacity>
     
      </View>
      <ResultImc 
      messageResultImc={messageImc}
       ResultImc={imc}
       />
    </View>
  );
}



