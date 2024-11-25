import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ForgotPassword = ({ setCurrentPanel }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => setCurrentPanel('PasswordRecovery')}> 
      <Text style={styles.signUp}>Forgot Password</Text>
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
    signUp: {
        fontSize: 16,
        fontWeight: 'semibold',
        color: '#6aa84f',
      },
  });

export default ForgotPassword