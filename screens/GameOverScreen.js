import { Image, StyleSheet, Text, View } from "react-native"
import Title from "../components/Title";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = () => {
  return (
    <View style={styles.rootScreen}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/success.png")} />
      </View>
      <Text style={styles.summaryText}>Your phone need <Text style={styles.highlight}>X</Text> rounds to guess the number <Text style={styles.highlight}>Y</Text>.</Text>
      <PrimaryButton >Start new game</PrimaryButton>
    </View>
  )
}
export default GameOverScreen;
const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    padding:24,
    justifyContent:'center',
    alignItems:'center'
  },
  imageContainer:{
    borderRadius:150,
    width:300,
    height:300,
    borderWidth:3,
    borderColor:Colors.primary800,
    overflow:'hidden',
    margin:36,
    
  },
  image:{
    width:'100%',
    height:'100%'
  },
  summaryText:{
    fontSize:24,
    textAlign:'center',
    marginBottom:24
  },
  highlight:{
    color:Colors.primary500
  }
}) 