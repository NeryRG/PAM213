import React, {useState}from "react";

import { ScrollView, View, Text,Stylesheet, Button } from "react-native-web"

export default function ScrollViewScreen(){
  const [items,setItems] = useState(["Opcion 1", "Opcion 2", "Opscion 3"])

  const agregarOpcion = () => {
    const nuevaOpcion =`Opcion ${items.length +1}`;
    setItems([...items,nuevaOpcion]);
  };

  const borrarUltima = () =>{
    if (items.lenght > 3){
      setItems(items.slice(0,items.length - 1));
    } else{
      alert("Solo se borran las opciones que agregaste");
    }
  };

  return(

    <View style={styles.container}>
      <Text style={styles.title}>ScrollView </Text>

      <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      hotizontal={true}
      showsVerticalScrollIndicator={true}
      persistentScrollbar={true}
      scrollEnabled={true}
      >

      {items.map((item,index)=>(
      <View key={index} style={styles.box}>
        <Text style={styles.Text}>{item}</Text>
      </View>
     )) }
        </ScrollView>
        <View style={styles.buttonContainer}>
        <Button title="Agregar Opcion" color="#4d8a71ff" onPress={agregarOpcion}></Button>
        <View style={styles.space}/>
        <Button title="Borrar Opcion" color="#956b37ff" onPress={borrarUltima}></Button>


          </View>
      </View>
  );
}

const styles = StyleSheet.create({ 
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: '#EEF2FF',
    },
    title:{
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
        color: '#2C3E50',
    },
    scroll:{
        flex: 1,
        marginBottom: 15,
        borderRadius: 10,
        backgroundColor: '#F9FAFB'
    },
    content:{
        paddingVertical: 15,
        alignItems: 'center',
    },
    box:{
        backgroundColor: '#82B6ED',
        width: '90%',
        padding: 20,
        marginVertical: 10,
        borderRadius: 15,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    text:{
        fontSize: 18,
        color: '#1F2937',
        textAlign: 'center',
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    space:{
        width: 10,
    },
})