// ScrollView con 6 imágenes en vertical
// Cada tarjeta debe contener:
// - ImageBackground con fotografía
// - Título
// - Descripción
// - Botón “Ver detalles” con alert

import React from "react";
import { ScrollView, View, Text, StyleSheet, Button, ImageBackground, Alert } from "react-native";

export default function MiGaleria() {

  const mostrarAlerta = (descripcion) => {
    Alert.alert("Detalles", descripcion);
  };

  return (
    <ScrollView style={styles.fondo}>
      <Text style={styles.titulo}>Galería de Imágenes</Text>

        <View key={1} style={styles.caja}>
          <ImageBackground
            source={require(`../assets/recursos/imagen1.png`)}
            style={styles.imagen}
            imageStyle={{ borderRadius: 8 }}
          >
            <View style={styles.overlay}></View>
          </ImageBackground>

          <Text style={styles.subtitulo}>Imagen 1</Text>
          <Text style={styles.texto}>Imagen número 1 del Examen 2do Parcial</Text>

          <Button
            title="Ver detalles"
            onPress={() => mostrarAlerta(`Detalles de la imagen1`)}
            color="#4C6EF5"
          />
        </View>

        <View key={1} style={styles.caja}>
          <ImageBackground
            source={require(`../assets/recursos/imagen2.png`)}
            style={styles.imagen}
            imageStyle={{ borderRadius: 8 }}
          >
            <View style={styles.overlay}></View>
          </ImageBackground>

          <Text style={styles.subtitulo}>Imagen 2</Text>
          <Text style={styles.texto}>Imagen número 2 del Examen 2do Parcial</Text>

          <Button
            title="Ver detalles"
            onPress={() => mostrarAlerta(`Detalles de la imagen1`)}
            color="#4C6EF5"
          />
        </View>

        <View key={1} style={styles.caja}>
          <ImageBackground
            source={require(`../assets/recursos/imagen3.png`)}
            style={styles.imagen}
            imageStyle={{ borderRadius: 8 }}
          >
            <View style={styles.overlay}></View>
          </ImageBackground>

          <Text style={styles.subtitulo}>Imagen 3</Text>
          <Text style={styles.texto}>Imagen número 3 del Examen 2do Parcial</Text>

          <Button
            title="Ver detalles"
            onPress={() => mostrarAlerta(`Detalles de la imagen1`)}
            color="#4C6EF5"
          />
        </View>

        <View key={1} style={styles.caja}>
          <ImageBackground
            source={require(`../assets/recursos/imagen4.png`)}
            style={styles.imagen}
            imageStyle={{ borderRadius: 8 }}
          >
            <View style={styles.overlay}></View>
          </ImageBackground>

          <Text style={styles.subtitulo}>Imagen 4</Text>
          <Text style={styles.texto}>Imagen número 4 del Examen 2do Parcial</Text>

          <Button
            title="Ver detalles"
            onPress={() => mostrarAlerta(`Detalles de la imagen1`)}
            color="#4C6EF5"
          />
        </View>

        <View key={1} style={styles.caja}>
          <ImageBackground
            source={require(`../assets/recursos/imagen5.png`)}
            style={styles.imagen}
            imageStyle={{ borderRadius: 8 }}
          >
            <View style={styles.overlay}></View>
          </ImageBackground>

          <Text style={styles.subtitulo}>Imagen 5</Text>
          <Text style={styles.texto}>Imagen número 5 del Examen 2do Parcial</Text>

          <Button
            title="Ver detalles"
            onPress={() => mostrarAlerta(`Detalles de la imagen1`)}
            color="#4C6EF5"
          />
        </View>

        <View key={6} style={styles.caja}>
          <ImageBackground
            source={require(`../assets/recursos/imagen6.png`)}
            style={styles.imagen}
            imageStyle={{ borderRadius: 8 }}
          >
            <View style={styles.overlay}></View>
          </ImageBackground>

          <Text style={styles.subtitulo}>Imagen 6</Text>
          <Text style={styles.texto}>Imagen número 6 del Examen 2do Parcial</Text>

          <Button
            title="Ver detalles"
            onPress={() => mostrarAlerta(`Detalles de la imagen1`)}
            color="#4C6EF5"
          />
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
    borderRadius: 10,
    marginBottom: 25,
    alignItems: "center",
    elevation: 4,
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2D3748",
    marginTop: 10,
    marginBottom: 5,
  },
  texto: {
    fontSize: 14,
    color: "#4A5568",
    marginBottom: 10,
    textAlign: "center",
  },
  imagen: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
});
