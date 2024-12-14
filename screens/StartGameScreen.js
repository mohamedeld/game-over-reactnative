import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import PrimaryButton from '../components/PrimaryButton'

export default function StartGameScreen() {
  const [value,setValue] = useState('');

  function handleChangeValue(data){
    setValue(data);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} value={value} onChangeText={handleChangeValue} maxLength={2} keyboardType='number-pad' autoCapitalize='none' autoCorrect={false}/>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer:{
    marginHorizontal:24,
    borderRadius:8,
    marginTop:100,
    padding:16,
    backgroundColor:'#4e0329',
    evaluation:4,
    shadowColor:'black',
    shadowOffset:{widt:0,height:2},
    shadowRadius:6,
    shadowOpacity:0.25,
    
  },
  textInput:{
    height:50,
    fontSize:32,
    borderBottomColor:'#ddb52f',
    borderBottomWidth:2,
    color:'#ddb52f',
    marginVertical:8,
    fontWeight:'bold',
    width:50,
    textAlign:'center',
    marginHorizontal:'auto'
  }
})