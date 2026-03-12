import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={ViewExemplo.container}>
      <Text style={ViewExemplo.titulo}>Blue--App</Text>

      <Text>Bem vindo ao Blue--app, aqui vc é o Protagonista.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ViewExemplo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1cf7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    marginTop:10,
    fontSize: 18,
    fontWeight: "bold",
    alignItems: 'center',
    justifyContent: 'center',
  }
});