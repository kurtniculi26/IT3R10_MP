import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LoginText from '../src/Typography/LoginText';
import EmailAddressInput from '../src/Components/Inputs/EmailAddressInput';
import PasswordInput from '../src/Components/Inputs/PasswordInput';
import LoginButton from '../src/Components/Buttons/LoginButton';
import NoAccountPrompt from '../src/Typography/NoAccountPrompt';
import ForgotPassword from '../src/Typography/ForgotPassword';

const Login = ({ setCurrentPanel }) => {

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <LoginText />
        <EmailAddressInput />
        <PasswordInput />
        <LoginButton />
        <NoAccountPrompt setCurrentPanel={setCurrentPanel} />
        <ForgotPassword setCurrentPanel={setCurrentPanel} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  panel: {
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

export default Login;
