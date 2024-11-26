import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import SignUpText from '../Typography/SignUpText';
import EmailAddressInput from '../Components/Inputs/EmailAddressInput';
import PasswordInput from '../Components/Inputs/PasswordInput';
import AccountPrompt from '../Typography/AccountPrompt';
import ConfirmPasswordInput from '../Components/Inputs/ConfirmPasswordInput';
import SignUpButton from '../Components/Buttons/SignUpButton';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <SignUpText/>
        <EmailAddressInput/>
        <PasswordInput/>
        <ConfirmPasswordInput/>
        <SignUpButton/>
        <AccountPrompt/>
      </View>
    </View>
  )
}

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

export default SignUp