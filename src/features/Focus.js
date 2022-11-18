import { TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";

const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label={"What is your Focuis Goal?"}
          style={styles.textInput}
        ></TextInput>
        <View style={styles.button}>
          <RoundedButton title="+" size={50}></RoundedButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    marginRight: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "top",
    padding: 50,
  },
});

export default Focus;
