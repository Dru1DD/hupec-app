import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { store } from './redux/store';

export default function App () {

  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if(!isLoadingComplete) {
    return null
  } 

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar />
        <Navigation colorScheme={colorScheme}/>
      </SafeAreaProvider>
    </Provider>
    
  )
}