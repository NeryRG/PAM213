import React,{useState} from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet, Platform } from 'react-native';

export default function Input() {
  const[nombre, setNombre]= useState('');
  const[contrasena, setContraseña]= useState('');
  const[multexto, setMultexto]= useState('');

  const mostraralerta = () => {
  if(nombre.trim() === ''){
    if(Plataform.OS === 'web'){
      alert('Por favor, escribe tu nombre antes de continuar.');
    }else {
      Alert.alert(
        'Atencion',
        'Por favor, escribe tu nombre antes de continuar',
        [
          {text: 'cancelar'},
          {text: 'Aceptar'}
        ]
      );
    }
  }
    else{
      if (Plataform.OS === 'web'){
        alert(`BIenvenido, ${nombre}`);
      }
      else{
        Alert.alert(
          `Hola`, `BIenvenido, ${nombre}`,
          [
            {text:'cancelar'},
            {text:'aceptar'}
          ]
        );
    }
  }
};
return (
  <View style= {Styles.container}> 
   <Text style= {styles.titulo}>Practica TextInput y Alert</Text>

  <TextInput
  style={styles.input}
  placeholder= "Escribe tu nombre"
  value={nombre}
  onChangeText={setNombre}
/>

  <TextInput
  style={styles.input}
  placeholder= "Contraseña"
  secureTextEntry={true}
  keyboardType= 'numeric'
  value={contrasena}
  onChangeText={setContraseña}
/>

  <TextInput
  style={styles.input}
  placeholder= "Multitexto"
  value={multexto}
  multiline={true}
  onChangeText={setMultexto}
/>

    <Button title="Mostrar Alerta" onPress={mostrarAlerta}/>
  </View>
);
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    padding: 20,
  },
  titulo:{
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 15,
  },
input:{
  borderWidth: 1,
  borderColor: '#aaa',
  borderRadius: 5,
  width: '80%',
  padding: 10,
  marginBottom: 15
},
});