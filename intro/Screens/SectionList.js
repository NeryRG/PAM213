// Importamos los componentes necesarios desde react-native
import { Text, StyleSheet, View, SectionList } from 'react-native';

// Exportamos el componente principal de la pantalla
export default function FlatListScreen() {

  // 🔹 Datos que usará la SectionList.
  // Cada objeto representa una sección con un título y una lista de ítems (data)
  const DATA = [
    {
      title: 'Frutas',
      data: ['Manzana', 'Banana', 'Naranja'],
    },
    {
      title: 'Verduras',
      data: ['Lechuga', 'Zanahoria', 'Tomate'],
    },
  ];

  // 🔹 El return devuelve la estructura visual de la pantalla
  return (
    <View style={styles.container}> 
      {/* SectionList: muestra listas agrupadas por secciones */}
      <SectionList
        sections={DATA} // Pasamos las secciones que definimos arriba
        keyExtractor={(item, index) => item + index} // Clave única para cada ítem

        // 🔸 renderItem: cómo se muestra cada elemento dentro de una sección
        renderItem={({ item }) => (
          <Text style={styles.item}>{item}</Text>
        )}

        // 🔸 renderSectionHeader: cómo se muestra el título de cada sección
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}

        // 🔸 Componente que se muestra antes de todas las secciones
        ListHeaderComponent={() => (
          <Text style={styles.listHeader}>Lista de Alimentos</Text>
        )}

        // 🔸 Componente que se muestra al final de todas las secciones
        ListFooterComponent={() => (
          <Text style={styles.listFooter}>Lista terminada :) </Text>
        )}

        // 🔸 Separador entre cada ítem dentro de las secciones
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
}

// 🔹 Aquí definimos los estilos de cada parte de la pantalla
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda la pantalla
    paddingHorizontal: 16, // Margen horizontal
    paddingTop: 30, // Margen superior
    backgroundColor: '#fff', // Fondo blanco
  },
  listHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'grey', // Fondo gris claro
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  item: {
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  separator: {
    height: 1, // Línea delgada
    backgroundColor: '#ddd', // Gris suave
    marginHorizontal: 20,
  },
  listFooter: {
    textAlign: 'center',
    padding: 15,
    fontStyle: 'italic',
  },
});