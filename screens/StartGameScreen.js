import { View, Text, StyleSheet, TextInput,Alert } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'
import { Colors } from '../constants/colors';

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
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} value={value} onChangeText={handleChangeValue} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false}/>
      <PrimaryButton handlePress={resetInputHandler}>Reset</PrimaryButton>
      <PrimaryButton handlePress={confirmInputHandler}>Confirm</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer:{
    marginHorizontal:24,
    borderRadius:8,
    marginTop:100,
    padding:16,
    backgroundColor:Colors.primary800,
    evaluation:4,
    shadowColor:'black',
    shadowOffset:{widt:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.25,
    
  },
  textInput:{
    height:80,
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