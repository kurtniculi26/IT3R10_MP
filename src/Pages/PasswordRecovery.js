import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import PasswordRecoveryText from '../Typography/PasswordRecoveryText';
import RecoveryEmailAddressInput from '../Components/Inputs/RecoveryEmailAddressInput';
import CodeInput from '../Components/Inputs/CodeInput';
import AccountPrompt from '../Typography/AccountPrompt';
import PasswordRecoveryButton from '../Components/Buttons/PasswordRecoveryButton';

const PasswordRecovery = ({ setCurrentPanel }) => {
  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <PasswordRecoveryText/>
        <RecoveryEmailAddressInput/>
        <CodeInput/>
        <PasswordRecoveryButton/>
        <AccountPrompt setCurrentPanel={setCurrentPanel}/>
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

export default PasswordRecovery