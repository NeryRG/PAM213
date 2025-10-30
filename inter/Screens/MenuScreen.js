import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import InputScreen from './InputScreen'
import Image from './ImageBackgroundScreen'
import ScrollScreen from './ScrollScreen'
import Indicator from './Indicator'
import FlatlistScreen from './FlatlistScreen'
import Modal from './Modal'
import Bottomsheet from './Bottomsheet'
import Prac_Repaso from './Prac_Repaso'


export default function MenuScreen (){
  
    const[ screen, setScreen ]= useState( 'menu'); 

    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case 'input':
            return <InputScreen/>;
        case 'imagen':
            return <ImagenScreen/>;
        case 'scroll':
            return <ScrollScreen/>;
        case 'indicator':
            return <Indicator/>;
        case 'flatlist':
            return <FlatlistScreen/>;
        case 'modal':
            return <Modal/>;
        case 'bottomsheet':
            return <Prac_Repaso/>;
        case 'Prac_Repaso':
       
        case 'menu':
            default:
                return (
                    <View>
                         <Text>Menu de practicas </Text>
                         <Button color= 'hsla(207, 61%, 45%, 1.00)'  title='Pract: Contador' onPress={()=> setScreen('contador')}/>
                         <Button color= 'hsla(207, 61%, 45%, 1.00)' title='Pract: Buttons' onPress={()=> setScreen('botones')}/>
                         <Button color='hsla(207, 61%, 45%, 1.00)'  title='Pract: Text y input' onPress={()=> setScreen('input')}/>
                        <Button color= 'hsla(207, 61%, 45%, 1.00)' title='Pract: Imagen y fondo' onPress={()=> setScreen('imagen')} />
                        <Button color='hsla(207, 61%, 45%, 1.00)'  title='Pract: Scroll View' onPress={()=> setScreen('scroll')} />
                        <Button color= 'hsla(207, 61%, 45%, 1.00)' title='Pract: Activity Indicator' onPress={()=> setScreen('indicator')} />
                        <Button color= 'hsla(207, 61%, 45%, 1.00)' title='Pract: Flatlist y Section List' onPress={()=> setScreen('flatlist')} />
                        <Button color= 'hsla(207, 61%, 45%, 1.00)'  title='Pract: Modal' onPress={()=> setScreen('modal')} />
                        <Button color= 'hsla(207, 61%, 45%, 1.00)'  title='Pract: Bottomsheet' onPress={()=> setScreen('bottomsheet')} />
                        <Button color= 'hsla(207, 61%, 45%, 1.00)'  title='Pract: Prac_Repaso' onPress={()=> setScreen('Prac_Repaso')} />

                    </View>
                );
        
    }
    
}