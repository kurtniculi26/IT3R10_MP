import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import PageOne from './src/components/Page/PageOne';
import React, { useState } from 'react';

export default function App() {
  const [toggle, setToggle] = useState(false); // Manage toggle state here

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle); // Toggle the state
  };

  return (
    <SafeAreaProvider style={{ backgroundColor: toggle ? '#000' : '#FFF' }}>
      <SafeAreaView>
        {/* Pass toggle and handleToggle to PageOne */}
        <PageOne toggle={toggle} onToggle={handleToggle} />
        <StatusBar style='auto' />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
