import { View, Text, StyleSheet, FlatList } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";
const FocusHistory = ({ historyItems }) => {
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things focused on </Text>
      <FlatList data={historyItems} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: "bold",
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm,
  },
});

export default FocusHistory;
