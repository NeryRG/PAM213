//ScrollView con 6 imagenes en vertical
//4. Cada tarjeta debe contener:
//Un ImageBackground con la fotografia
//El título de la foto
//Una breve descripción
//Un Button con el texto “Ver detalles”
//Cada tarjeta con boton y cada vez que se presione mostrar una alera de descripcion
//Estilos consistentes, y buen espaciado entre ellos

import React, {useState}from "react";
import { ScrollView, View, Text, StyleSheet, Button, Image } from "react-native";

export default function MiGaleria() {
  return (
    <ScrollView style={styles.fondo}>
      <Text style={styles.titulo}>6 Imagenes</Text>

      {/* Imagen1 */}
      <View style={styles.caja}>
        <Text style={styles.subtitulo}>Ingresos Generales</Text>
        <Text style={styles.texto}>
          Aquí puedes ver de dónde provienen tus ingresos principales cada mes.
        </Text>
        <View style={styles.centrarImagen}>
          <Image
            source={require('../assets/recursos/Imagen1')}
            style={styles.imagen}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Imagen2 */}
      <View style={styles.caja}>
        <Text style={styles.subtitulo}>Ahorro Acumulado</Text>
        <Text style={styles.texto}>
          Muestra cómo ha crecido tu ahorro a lo largo del tiempo.
        </Text>
        <View style={styles.centrarImagen}>
          <Image
            source={require('../assets/recursos/Imagen1')}
            style={styles.imagen}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Imagen3 */}
      <View style={styles.caja}>
        <Text style={styles.subtitulo}>Ahorro Acumulado</Text>
        <Text style={styles.texto}>
          Muestra cómo ha crecido tu ahorro a lo largo del tiempo.
        </Text>
        <View style={styles.centrarImagen}>
          <Image
            source={require('../assets/recursos/Imagen1')}
            style={styles.imagen}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Imagen4 */}
      <View style={styles.caja}>
        <Text style={styles.subtitulo}>Ahorro Acumulado</Text>
        <Text style={styles.texto}>
          Muestra cómo ha crecido tu ahorro a lo largo del tiempo.
        </Text>
        <View style={styles.centrarImagen}>
          <Image
            source={require('../assets/recursos/Imagen1')}
            style={styles.imagen}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Imagen5 */}
      <View style={styles.caja}>
        <Text style={styles.subtitulo}>Ahorro Acumulado</Text>
        <Text style={styles.texto}>
          Muestra cómo ha crecido tu ahorro a lo largo del tiempo.
        </Text>
        <View style={styles.centrarImagen}>
          <Image
            source={require('../assets/recursos/Imagen1')}
            style={styles.imagen}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Imagen6 */}
      <View style={styles.caja}>
        <Text style={styles.subtitulo}>Ahorro Acumulado</Text>
        <Text style={styles.texto}>
          Muestra cómo ha crecido tu ahorro a lo largo del tiempo.
        </Text>
        <View style={styles.centrarImagen}>
          <Image
            source={require('../assets/recursos/Imagen1')}
            style={styles.imagen}
            resizeMode="contain"
          />
        </View>
      </View>
      
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#EAF0FF',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A202C',
    textAlign: 'center',
    marginBottom: 25,
  },
  caja: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 25,
    alignItems: 'center', // centra todo dentro
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 8,
    textAlign: 'center',
  },
  texto: {
    fontSize: 14,
    color: '#4A5568',
    marginBottom: 10,
    textAlign: 'center',
  },
  centrarImagen: {
    width: '100%',
    alignItems: 'center',
  },
  imagen: {
    width: '90%',
    height: 200,
    borderRadius: 8,
    backgroundColor: '#DDE7FF',
  },
});