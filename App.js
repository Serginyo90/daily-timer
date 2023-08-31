import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>Create personal Timer</Text>
      <View style={styles.input}>
        <TextInput placeholder="Name" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Date" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Note" />
      </View>
      <View style={styles.input}>
        <TextInput placeholder="Tags" />
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
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 50,
    backgroundColor: "#DCE8F8",
  },
  title: {
    color: "#202022",
    borderWidth: 1,
    textAlign: "center",
    fontSize: 16,
    marginBottom: 24,
  },
  input: {
    color: "#F1F7FF",
    height: 48,
    marginBottom: 12,
    backgroundColor: "#fff",
  },
});
