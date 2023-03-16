/* 🚀📱 Aulinha especial do App Espacial  🚀 */

// importar react-native-gesture-handler para reconhecer gestos
// importar NavigationContainer do '@react-navigation/native';
// importar createStackNavigator do '@react-navigation/stack';

// importar as telas:
//HomeScreen 
//IssLocationScreen 
//MeteorScreen 
//UpdateScreen 


//criar createStackNavigator() , coloque na variável Stack

//Use o modelo do site oficial https://reactnavigation.org/docs/stack-navigator/
//com a diferença de mudar o nome MyStack para App


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Isto é apenas um esboço!
        Faça com que seja um App Espacial Incrível! 🚀</Text>
      <StatusBar style="auto" />
    </View>
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
