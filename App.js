import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import TimerItem from "./components/TimerItem";
import TimerInput from "./components/TimerInput";

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
    const key = Math.random().toString();
    console.log("__send__", { date, name, note, tag, key });
    setTimers((timers) => [...timers, { key, date, name, note, tag }]);
    setName("");
    setDate("");
    setNote("");
    setTag("");
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>Create personal Timer</Text>
      <TimerInput
        value={name}
        handleChangeName={handleChangeName}
        placeholder="Name"
      />
      <TimerInput
        value={date}
        handleChangeName={handleChangeDate}
        placeholder="Date"
      />
      <TimerInput
        value={note}
        handleChangeName={handleChangeNote}
        placeholder="Note"
      />
      <TimerInput
        value={tag}
        handleChangeName={handleChangeTag}
        placeholder="Tags"
      />
      <View style={styles.button}>
        <Button title="Start Timer" onPress={handleSubmit} />
      </View>
      <FlatList
        data={timers}
        renderItem={({ item }) => {
          return <TimerItem name={item.name} note={item.note} />;
        }}
        alwaysBounceVertical={false}
      />
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
  button: {
    marginBottom: 8,
  },
});
