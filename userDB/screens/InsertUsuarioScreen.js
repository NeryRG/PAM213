import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, ActivityIndicator, Platform } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function UsuarioView() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);

  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
      console.log(`${data.length} usuarios cargados`);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleAgregar = async () => {
    if (guardando) return;
    try {
      setGuardando(true);
      const usuarioCreado = await controller.crearUsuario(nombre);
      Alert.alert('Usuario Creado', `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`);
      setNombre('');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setGuardando(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };
    init();
    controller.addListener(cargarUsuarios);

    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  const renderUsuario = ({ item, index }) => (
    <View style={styles.userItem}>
      <View style={styles.userNumber}>
        <Text style={styles.userNumberText}>{index + 1}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.nombre}</Text>
        <Text style={styles.userId}>ID: {item.id}</Text>
        <Text style={styles.userDate}>
          {new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
        />
        <TouchableOpacity 
          style={[styles.button, guardando && styles.buttonDisabled]}
          onPress={handleAgregar}
          disabled={guardando}
        >
          {guardando ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.buttonText}>Agregar Usuario</Text>
          )}
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" style={styles.loader} />
      ) : (
        <FlatList
          data={usuarios}
          renderItem={renderUsuario}
          keyExtractor={item => item.id.toString()}
          style={styles.list}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loader: {
    marginTop: 50,
  },
  list: {
    flex: 1,
  },
  userItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  userNumber: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  userNumberText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  userId: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  userDate: {
    fontSize: 12,
    color: '#999',
  },
});