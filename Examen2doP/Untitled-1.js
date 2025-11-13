      {[1].map((num) => (
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
      ))}