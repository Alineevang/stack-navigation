import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import Contact from './src/screens/Contact'
import Home from './src/screens/Home/Home';
import Profile from './src/screens/Profile/Profile';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
         options = {{
          title: "Tela Inicial",
         headerStyle: {
          backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold"
          }
         // headerTitleAlign: "center",
          //headerShown: false,
        }}
        
        />

        <Stack.Screen name="Perfil" component={Profile} />
        <Stack.Screen name="Contato" component={Contact} />
      </Stack.Navigator>
      <StatusBar styles="auto"></StatusBar>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

