import { TextInput } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";
import { useState } from "react";
import { spacing, sizing } from "../utils/sizes";

const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label={"What are you focusing on?"}
          onChangeText={setSubject}
          style={styles.textInput}
        ></TextInput>
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={spacing.xxl}
            onPress={() => addSubject(subject)}
          ></RoundedButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    justifyContent: "center",
  },
  textInput: {
    flex: 1,
    marginRight: spacing.lg,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "top",
    padding: spacing.xxl,
  },
});

export default Focus;
