import { View, StyleSheet } from "react-native";
import { RoundedButton } from "../components/RoundedButton";

const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.timingButton}>
      <RoundedButton
        size={75}
        title="10"
        onPress={() => onChangeTime(10)}
      ></RoundedButton>
      <RoundedButton
        size={75}
        title="15"
        onPress={() => onChangeTime(15)}
      ></RoundedButton>
      <RoundedButton
        size={75}
        title="20"
        onPress={() => onChangeTime(20)}
      ></RoundedButton>
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Timing;
