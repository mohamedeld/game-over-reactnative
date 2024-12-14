import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <linearGradient color={['#4e0329','#ddb52f']} style={styles.container}>
      <ImageBackground source={require("./assets/Images/background.png")} resizeMode='cover' style={styles.container} imageStyle={styles.backgroundImage}>
      <StartGameScreen />

      </ImageBackground>
    </linearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  backgroundImage:{
    opacity:0.15
  }
});
