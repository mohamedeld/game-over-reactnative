import { View, Text, StyleSheet, TextInput,Alert } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { Colors } from '../constants/colors';
import Title from '../components/Title';
import Card from '../components/Card';

export default function StartGameScreen({onPickNumber}) {
  const [value,setValue] = useState('');

  function handleChangeValue(data){
    setValue(data);
  }
  function resetInputHandler(){
    setValue('')
  }

  function confirmInputHandler(){
    const chosenNumber = Number(value);
    if(isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99){
      Alert.alert('Invalid number', 'Number has to be from 1 to 99',[
        {
          text:'Okay',
          style:'destructive',
          onPress:resetInputHandler
        }
      ])
    }
    onPickNumber(chosenNumber);

  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.numberText}>Enter a number</Text>
        <TextInput style={styles.textInput} value={value} onChangeText={handleChangeValue} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false}/>
        <PrimaryButton handlePress={resetInputHandler}>Reset</PrimaryButton>
        <PrimaryButton handlePress={confirmInputHandler}>Confirm</PrimaryButton>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:100,
    marginHorizontal:5
  },
  
  numberText:{
    color:Colors.accent500,
    fontSize:24,
    textAlign:'center'
  },
  textInput:{
    height:60,
    fontSize:32,
    borderBottomColor:Colors.accent500,
    borderBottomWidth:2,
    color:Colors.accent500,
    marginVertical:8,
    fontWeight:'bold',
    width:50,
    textAlign:'center',
    marginHorizontal:'auto'
  }
})