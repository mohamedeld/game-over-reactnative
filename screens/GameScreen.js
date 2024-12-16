import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native"
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import {Ionicons} from "@expo/vector-icons"
import GuessLogItem from "../components/GuessLogItem";
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
  const [guessRounds,setGuessRounds] = useState([]);

  useEffect(()=>{
    if(currentGuess === userNumber){
      setGameIsOver(true)
    }
  },[currentGuess,userNumber])
  
  useEffect(()=>{
    minBoundary = 1;
    maxBoundary = 100;
  },[])

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
    setGuessRounds(prev=> [...prev,newRandomNumber])
  }

  const GuessNumsLength = guessRounds?.length;

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
          -
          </PrimaryButton>
          <PrimaryButton handlePress={()=> nextGuessHandler('higher')}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList data={guessRounds} renderItem={(itemData)=>{
          return (
            <GuessLogItem roundNumber={GuessNumsLength -  itemData?.index} guess={itemData?.item}/>
          )
        }} keyExtractor={(item)=> item}/>
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
  listContainer:{
    flex:1,
    padding:12,
  },
  
})