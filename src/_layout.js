import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="app"
          options={{
            drawerLabel: 'Home',
            title: 'Home Screen',
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Settings',
            title: 'Settings Screen',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
