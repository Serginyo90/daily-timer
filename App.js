import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View>
        <Text style={styles.colorText}>Новый текст</Text>  
      </View>
      <Text style={styles.colorText}>Test text</Text>
      <Button title='Click me' />
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
  colorText: { margin: 16, borderWidth: 2, borderColor: 'red', padding: 8 }
});
