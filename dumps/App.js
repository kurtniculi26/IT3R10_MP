import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import Login from './login';
import SignUp from '../src/app/signup';
import PasswordRecovery from '../src/app/passwordrecovery';
import Navigation from '../src/Pages/Navigation';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerButton from '../src/Components/Buttons/DrawerButton';

export default function App() {
  const [currentPanel, setCurrentPanel] = useState('Login'); // State for active panel

  const renderPanel = () => {
    switch (currentPanel) {
      case 'Login':
        return <Login setCurrentPanel={setCurrentPanel} />;
      case 'SignUp':
        return <SignUp setCurrentPanel={setCurrentPanel} />;
      case 'PasswordRecovery':
        return <PasswordRecovery setCurrentPanel={setCurrentPanel} />;
      default:
        return <Login setCurrentPanel={setCurrentPanel} />;
    }
  };

  return (
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.panel}>
              <DrawerButton/>
              {renderPanel()}
              <Navigation setCurrentPanel={setCurrentPanel}/>
            </SafeAreaView>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  panel: {
    alignItems: 'row',
    justifyContent: 'flex-start',
  }
});
