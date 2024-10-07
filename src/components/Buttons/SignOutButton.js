import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const SignOutButton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => console.log('Sign Out pressed')}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 15
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20, 
    borderRadius: 15,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default SignOutButton;
