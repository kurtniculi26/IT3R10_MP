import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const AccountPrompt = ({ setCurrentPanel }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Already Have an Account? </Text>
      <TouchableOpacity style={styles.button} onPress={() => setCurrentPanel('Login')}> 
        <Text style={styles.logIn}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
  text: {
    fontSize: 16,
  },
  logIn: {
    fontSize: 16,
    textDecorationLine: 'underline',
    color: '#6aa84f',
  },
});

export default AccountPrompt;
