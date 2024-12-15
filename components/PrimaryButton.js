import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../constants/colors'

const PrimaryButton = ({ children, handlePress }) => {
  return (
    <View style={styles.btnOuterContainer}>
      <Pressable onPress={handlePress} android_ripple={{color:Colors.primary600}} style={({pressed})=>pressed ? [styles.pressed,styles.btnInnerContainer]:styles.btnInnerContainer}>
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  btnOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  btnInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed:{
    opacity:0.75
  }
})