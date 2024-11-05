import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const NoAccountPrompt = ({ setCurrentPanel }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Don't Have an Account? </Text>
      <TouchableOpacity style={styles.button} onPress={() => setCurrentPanel('SignUp')}> 
        <Text style={styles.signUp}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    text: {
      fontSize: 16,
    },
    signUp: {
        fontSize: 16,
        textDecorationLine: 'underline',
        color: '#6aa84f',
      },
  });

export default NoAccountPrompt