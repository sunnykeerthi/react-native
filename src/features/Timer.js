import * as React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Vibration } from "react-native";
import { RoundedButton } from "../components/RoundedButton";
import { colors } from "../utils/colors";
import { spacing } from "../utils/sizes";
import { ProgressBar } from "react-native-paper";
import Timing from "./Timing";
import { Countdown } from "./countDown";
import { useKeepAwake } from "expo-keep-awake";

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];
const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const onEnd = (reset) => {
    Vibration.vibrate();
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        ></Countdown>
        <View style={{ paddingTop: spacing.xxl }}>
          <Text style={styles.title}>Focusing on </Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View style={{ paddingTop: spacing.sm }}>
        <ProgressBar progress={progress} color={colors.progressBar} />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton
            title="Start"
            onPress={() => setIsStarted(true)}
          ></RoundedButton>
        )}
        {isStarted && (
          <RoundedButton
            title="Pause"
            onPress={() => setIsStarted(false)}
          ></RoundedButton>
        )}
      </View>
      <View style={styles.clearSubjectWrapper}>
        <RoundedButton
          size={50}
          title="-"
          onPress={clearSubject}
        ></RoundedButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countDown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  timingWrapper: {
    paddingTop: spacing.xxl,
    flex: 0.1,
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: "row",
    padding: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  task: { color: colors.white, textAlign: "center" },
  clearSubjectWrapper: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Timer;
