import { StyleSheet, TextInput, View } from "react-native";

function TimerInput(props) {
  return (
    <View style={styles.input}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="#898A8D"
        onChangeText={props.handleChangeName}
        value={props.value}
      />
    </View>
  );
}

export default TimerInput;

const styles = StyleSheet.create({
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
