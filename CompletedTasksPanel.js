import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Reusing task styles and layout from PendingTasksPanel
const CompletedTasksPanel = ({ tasks }) => {
  const renderTaskItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.panel}>
      <FlatList
        data={tasks}
        renderItem={renderTaskItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.taskList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  taskList: {
    flexGrow: 1,
    justifyContent: 'flex-start',
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E5E483',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 3,
  },
  taskName: {
    fontSize: 16,
    flex: 1,
  },
});

export default CompletedTasksPanel;
