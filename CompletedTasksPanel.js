import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

// Icon import for removing tasks
import removeIcon from './assets/trash.png';

const CompletedTasksPanel = ({ tasks = [], onRemoveTask }) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({});

  const handleRemoveTask = (id, event) => {
    onRemoveTask(id);  // Remove the task
    showTooltip('Removed', event);  // Show tooltip after task removal
  };

  const showTooltip = (text, event) => {
    const { pageX, pageY } = event.nativeEvent;
    setTooltipText(text);
    setTooltipPosition({ top: 550, left: 150 });  // Adjust tooltip position
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 2000);  // Tooltip will disappear after 2 seconds
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{item.name}</Text>
      <TouchableOpacity onPress={(event) => handleRemoveTask(item.id, event)}>
        <Image source={removeIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.panel}>
      {tasks.length === 0 ? (
        <View style={styles.centeredMessage}>
          <Text style={styles.noTasksMessage}>No tasks completed yet</Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          renderItem={renderTaskItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.taskList}
        />
      )}

      {/* Tooltip */}
      {tooltipVisible && (
        <View style={[styles.tooltip, tooltipPosition]}>
          <Text style={styles.tooltipText}>{tooltipText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    backgroundColor: '#EEEEEE',
    padding: 8,
    marginBottom: 10,
    borderRadius: 5,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    elevation: 3,
  },
  taskName: {
    fontSize: 16,
    flex: 1,
  },
  icon: {
    width: 25,
    height: 25,
  },
  noTasksMessage: {
    fontSize: 18,
    color: '#888888',
    textAlign: 'center',
  },
  centeredMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltip: {
    position: 'absolute',
    backgroundColor: '#666666',
    padding: 5,
    borderRadius: 5,
    zIndex: 10,
  },
  tooltipText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CompletedTasksPanel;
