import { StatusBar } from 'expo-status-bar';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import PageOne from './src/components/Page/PageOne';


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView> 
        <PageOne />
        <StatusBar style='auto'/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
