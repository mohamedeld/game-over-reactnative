import { StatusBar } from 'expo-status-bar';
import { ImageBackground, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { Colors } from './constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber,setUserNumber] = useState(null);
  const [gameIsOver,setGameIsOver]= useState(false);
  
  
  
  function pickNumberHandler(newValue){
    setUserNumber(newValue);
  }

  let screen = <StartGameScreen onPickNumber={pickNumberHandler}/>
  if(userNumber){
    screen = <GameScreen userNumber={userNumber} setGameIsOver={setGameIsOver}/>
  }
  if(gameIsOver){
    screen = <GameOverScreen/>
  }

  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.container}>
      <ImageBackground source={require("./assets/images/background.png")} resizeMode='cover' style={styles.container} imageStyle={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        {screen}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingVertical:16,
    
  },
  backgroundImage:{
    opacity:0.15
  }
});
