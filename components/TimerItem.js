import { StyleSheet, Text, View } from "react-native";

function TimerItem(props) {
  return (
    <View style={styles.wrapper}>
      <Text>
        {props.name}-{props.note}
      </Text>
    </View>
  );
}

export default TimerItem;

const styles = StyleSheet.create({
  wrapper: {
    borderColor: "#007AFF",
    borderWidth: 1,
    borderRadius: 10,
    height: 54,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 8,
    paddingLeft: 8,
  },
});
