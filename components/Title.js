import { StyleSheet, Text } from 'react-native'
import { Colors } from '../constants/colors'

const Title = ({children}) => {
  return (
    <Text style={styles.title}>{children}</Text>

  )
}

export default Title

const styles = StyleSheet.create({
  title:{
    fontSize:18,
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    borderWidth:2,
    borderColor:'white',
    paddingVertical:10,
    paddingHorizontal:20,
    maxWidth:'80%',
    marginHorizontal:'auto'
  }
})