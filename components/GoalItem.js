import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function GoalItem(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={props.onDelete.bind(this, props.id)} // goal id is also being passed into ondelete as props to be used.
    >
      <View style={styles.listItem}>
        <Text>{props.title} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10, // margin vertical gives margin to top and bottom, and not left and right.
  },
});
