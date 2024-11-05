import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Login from './src/Pages/Login';
import SignUp from './src/Pages/SignUp';
import PasswordRecovery from './src/Pages/PasswordRecovery';

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
    <View style={styles.container}>
      <View style={styles.panel}>
        {renderPanel()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  panel: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    width: '100%',
  },
});
