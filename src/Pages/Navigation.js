import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Navigation = ({ setCurrentPanel }) => {
  return (
    <View style={styles.upperPanel}>
        <TouchableOpacity onPress={() => setCurrentPanel('Login')}>
            <Ionicons name="log-in-outline" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentPanel('SignUp')}>
            <Ionicons name="lock-open-outline" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentPanel('PasswordRecovery')}>
            <Ionicons name="arrow-forward-circle-outline" size={35} color="black" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  upperPanel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 10,
    padding: 15,
    backgroundColor: '#e4e6eb',
    borderRadius: 15,
  },
});

export default Navigation;
