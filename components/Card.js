import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../constants/colors'

const Card = ({children}) => {
  return (
    <View style={styles.inputContainer}>
      {children}
    </View>
  )
}

export default Card
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  inputContainer:{
      marginHorizontal:24,
      borderRadius:8,
      marginTop:deviceWidth < 380 ? 18 :36,
      padding:16,
      backgroundColor:Colors.primary800,
      evaluation:4,
      shadowColor:'black',
      shadowOffset:{widt:0,height:2},
      shadowRadius:6,
      shadowOpacity:0.25,
      
    },
})