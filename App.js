import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import Focus from "./src/features/Focus";
import { colors } from "./src/utils/colors";
import { useState } from "react";
import Timer from "./src/features/Timer";
import FocusHistory from "./src/features/FocusHistory";
import { fontSizes } from "./src/utils/sizes";

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
          <Focus addSubject={setCurrentSubject}></Focus>
          {history.length >= 1 ? (
            <FocusHistory historyItems={history}></FocusHistory>
          ) : (
            <Text style={styles.textStyle}>No items to focus yet</Text>
          )}
        </>
      ) : (
        <Timer
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject]);
          }}
          clearSubject={() => {
            setCurrentSubject(null);
          }}
        ></Timer>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  textStyle: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: fontSizes.md,
  },
});
