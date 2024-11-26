import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
      screenOptions={{
        headerTintColor: '#6aa84f',
        headerTitleStyle: { color: 'black' },
        drawerActiveTintColor: '#6aa84f',
        drawerInactiveTintColor: 'gray',
      }}
      >
        <Drawer.Screen 
          name="(tabs)" 
          options={{ title: 'Dashboard' }} 
        />
        <Drawer.Screen 
          name="contact" 
          options={{ title: 'Contact us' }} 
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
