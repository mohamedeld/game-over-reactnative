import { Pressable, StyleSheet, Text, View } from 'react-native'

const PrimaryButton = ({ children, handlePress }) => {
  return (
    <Pressable onPress={handlePress}>

      <View style={styles.btnContainer}>
        <Text style={styles.btnText}>{children}</Text>
      </View>
    </Pressable>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  btnContainer:{
    backgroundColor:'#72063c',
    borderRadius:28,
    paddingVertical:8,
    paddingHorizontal:16,
    margin:4,
    elevation:2
  },
  btnText:{
    color:'white',
    textAlign:'center',
  }
})