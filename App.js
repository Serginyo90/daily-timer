import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>Create personal Timer</Text>
      <View style={styles.input}>
        <TextInput placeholder="Name" placeholderTextColor="#898A8D" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Date" placeholderTextColor="#898A8D" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Note" placeholderTextColor="#898A8D" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Tags" placeholderTextColor="#898A8D" />
      </View>
      <View>
        <Button title="Start Timer" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: 'flex-start',
    flexDirection: "column",
    paddingTop: 60,
    backgroundColor: "#DCE8F8",
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  title: {
    color: "#202022",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 24,
  },
  input: {
    color: "#202022",
    height: 48,
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 5,
    fontSize: 12,
    textAlign: "center",
    justifyContent: "center",
    paddingLeft: 12,
    paddingRight: 12,
  },
});
