import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [tag, setTag] = useState("");
  const [timers, setTimers] = useState([]);
  function handleChangeName(text) {
    setName(text);
  }
  function handleChangeDate(text) {
    setDate(text);
  }
  function handleChangeNote(text) {
    setNote(text);
  }
  function handleChangeTag(text) {
    setTag(text);
  }
  function handleSubmit() {
    console.log("__send__", { date, name, note, tag });
    setTimers((timers) => [...timers, { date, name, note, tag }]);
    setName("");
    setDate("");
    setNote("");
    setTag("");
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>Create personal Timer</Text>
      <View style={styles.input}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#898A8D"
          onChangeText={handleChangeName}
          value={name}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Date"
          placeholderTextColor="#898A8D"
          onChangeText={handleChangeDate}
          value={date}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Note"
          placeholderTextColor="#898A8D"
          onChangeText={handleChangeNote}
          value={note}
        />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="Tags"
          placeholderTextColor="#898A8D"
          onChangeText={handleChangeTag}
          value={tag}
        />
      </View>
      <View>
        <Button title="Start Timer" onPress={handleSubmit} />
      </View>
      {timers.map((timer) => {
        return (
          <Text key={timer.name}>
            {timer.name}-{timer.note}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "flex-start",
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
