import { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native"
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import {Ionicons} from "@expo/vector-icons"
function generateRandomNumber(min, max, exclude, attempts = 0) {
  // Maximum attempts to avoid infinite recursion
  const maxAttempts = 10;
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;

  if (randomNumber === exclude) {
    if (attempts >= maxAttempts) {
      // If max attempts reached, return a different number
      return exclude === min ? exclude + 1 : exclude - 1; // Ensure it's within bounds
    }
    return generateRandomNumber(min, max, exclude, attempts + 1); // Increment attempts
  } else {
    return randomNumber;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber,setGameIsOver})=>{

  const initialGuess = generateRandomNumber(minBoundary,maxBoundary,userNumber);
  const [currentGuess,setCurrentGuess] = useState(initialGuess);
  
  useEffect(()=>{
    if(currentGuess === userNumber){
      setGameIsOver(true)
    }
  },[currentGuess,userNumber])
  
  function nextGuessHandler(direction){

    if((direction === 'lower' && currentGuess < userNumber) || (direction === 'higher' && currentGuess > userNumber)){
      Alert.alert("Don't lie ","you know that is wrong...",[{
        text:'Sorry',style:'cancel'
      }])
      return;
    } 

    if(direction === 'lower'){
      maxBoundary = currentGuess; 
     
    }else{
      minBoundary = currentGuess + 1;
    }
    const newRandomNumber= generateRandomNumber(minBoundary,maxBoundary,currentGuess);
    setCurrentGuess(newRandomNumber);
  }

  return (
    <View style={styles.container}>
      <Title>
        Opponent's Guess
      </Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      {/* Guess */}
      <View>
        <Text>Higher or lower?</Text>
        {/* +
        - */}
        <View>
          <PrimaryButton handlePress={()=> nextGuessHandler('lower')}>
          <Ionicons name="md-add" size={24} color={"white"}/>
          </PrimaryButton>
          <PrimaryButton handlePress={()=> nextGuessHandler('higher')}>
            <Ionicons name="md-add" size={24} color={"white"}/>
          </PrimaryButton>
        </View>
      </View>
      <View>
        
      </View>
    </View>
  )
}
export default GameScreen;


const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:12,
  },
  
})