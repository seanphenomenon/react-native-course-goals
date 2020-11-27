import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  FlatList,
  ImagePropTypes,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]); // spread will keep track of all previous goals sets, and we add a new one to it.
    console.log(goalTitle);

    setIsAddMode(false); // this closes the modal after we add a goal.
  };

  const removeGoalHandler = (goalId) => {
    //  Removes goal onPress. References goalIDs. Returns true if id's do not match, because if they do match, thats the item we want to get rid of.
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId); // remove goal where id's do not match
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalHandler}
      />
      <FlatList
        //Instead of ScrollView, FlatList replaces it and speeds it up by only rendering what's required. Use it for unpredicatable lengths of lists. Goal data should have a specific shape like a list of objects with a key property in order to render without any warnings.
        KeyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id} // this makes sure goalID is prop to be used inside goal item already, upon delete.
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
