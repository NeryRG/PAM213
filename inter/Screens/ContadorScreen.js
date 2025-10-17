//1.-Imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

//2.- Main: Zona de componentes
export default function App() {
const [Contador,setContador]=useState(0);

  return (

    <View style={styles.container}>

      <Text style={styles.texto} > Contador: </Text>
      <Text style={styles.texto2} > {Contador} </Text>
      
      <View style={styles.botonesContainer}>
      <Button color="green" title='Agregar' onPress={()=>setContador(Contador+1)}/>
      <Button color="red" title='Quitar' onPress={()=>setContador(Contador-1)}/>
      <Button title='Reiniciar' onPress={()=>setContador(Contador-Contador)}/>
       </View>

      <StatusBar style="auto" />

    </View>

  );
}

//3.- Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#93c0f1ff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  texto:{
    color:'#9c97daff',
    fontSize: 30,
    fontFamily:'Times new Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
    
  },
    texto2:{
    color:'#9c1500ff',
    fontSize: 35,
    fontFamily:'Courier',
    fontWeight:700,
    fontStyle:'normal',
    textDecorationLine:'underline',

    },

    botonesContainer:{
        margintop:15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
    },
});