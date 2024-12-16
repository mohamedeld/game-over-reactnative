import { Dimensions, Image, StyleSheet, Text, View } from "react-native"
import Title from "../components/Title";
import { Colors } from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = ({roundsNumber,userNumber,onStartGame}) => {
  return (
    <View style={styles.rootScreen}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/images/success.png")} />
      </View>
      <Text style={styles.summaryText}>Your phone need <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
      <PrimaryButton handlePress={onStartGame}>Start new game</PrimaryButton>
    </View>
  )
}
export default GameOverScreen;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    padding:24,
    justifyContent:'center',
    alignItems:'center'
  },
  imageContainer:{
    borderRadius:150,
    width:deviceWidth < 380 ? 150 : 300,
    height:deviceWidth < 380 ? 150 :300,
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