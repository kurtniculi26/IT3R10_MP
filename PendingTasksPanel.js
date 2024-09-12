import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, Modal } from 'react-native';

// Icon imports
import editIcon from './assets/edit.png';
import deleteIcon from './assets/delete.png';
import doneIcon from './assets/done.png';

const PendingTasksPanel = ({
  tasks,
  onAddTask,
  onEditTask,
  onDeleteTask,
  onDoneTask,
  showIcons = true  // Prop to control the visibility of icons
}) => {
  const [taskInputVisible, setTaskInputVisible] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [tooltipVisible, setTooltipVisible] = useState(false);  // State to control tooltip visibility
  const [tooltipText, setTooltipText] = useState('');           // State to control tooltip text
  const [tooltipPosition, setTooltipPosition] = useState({});   // State to control tooltip position

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask('');
      setTaskInputVisible(false);
    }
  };

  const handleEditTask = (id) => {
    const task = tasks.find(t => t.id === id);
    setNewTask(task.name);
    setEditingTaskId(id);
    setTaskInputVisible(true);
  };

  const handleSaveEdit = () => {
    onEditTask(editingTaskId, newTask);
    setNewTask('');
    setEditingTaskId(null);
    setTaskInputVisible(false);
  };

  const handleDeleteTask = (id, event) => {
    onDeleteTask(id);  // Delete the task
    showTooltip('Removed', event);  // Show "Removed" tooltip after task deletion
  };

  const handleDoneTask = (id, event) => {
    const task = tasks.find(t => t.id === id);
    onDoneTask(task);
    showTooltip('Completed', event);  // Show "Removed" tooltip after task deletion
  };

  const handleCancel = () => {
    setNewTask('');
    setEditingTaskId(null);
    setTaskInputVisible(false);
  };

  // Function to show tooltip
  const showTooltip = (text, event) => {
    const { pageX, pageY } = event.nativeEvent;
    setTooltipText(text);
    setTooltipPosition({ top: 550, left: 150 });  // Adjust tooltip position based on icon
    setTooltipVisible(true);
    setTimeout(() => {
      setTooltipVisible(false);
    }, 2000);  // Tooltip will disappear after 1.5 seconds
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{item.name}</Text>
      {showIcons && (
        <View style={styles.taskActions}>
          <TouchableOpacity
            onPress={() => handleEditTask(item.id)}
          >
            <Image source={editIcon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={(event) => handleDeleteTask(item.id, event)}
          >
            <Image source={deleteIcon} style={styles.icon} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={(event) => handleDoneTask(item.id, event)}
          >
            <Image source={doneIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.panel}>
      {tasks.length === 0 ? (
        <View style={styles.centeredMessage}>
          <Text style={styles.noTasksMessage}>No task found</Text>
        </View>
      ) : (
        <FlatList
          data={tasks}
          renderItem={renderTaskItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.taskList}
        />
      )}

      {taskInputVisible && (
        <View style={styles.taskInputContainer}>
          <TextInput
            style={styles.taskInput}
            value={newTask}
            onChangeText={setNewTask}
            placeholder="Enter task name"
            autoFocus={true}  // Automatically open keyboard when visible
          />
          <View style={styles.taskInputActions}>
            <TouchableOpacity onPress={editingTaskId ? handleSaveEdit : handleAddTask} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>{editingTaskId ? 'Save' : 'Add Task'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
              <Text style={styles.submitButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {!taskInputVisible && (
        <TouchableOpacity onPress={() => setTaskInputVisible(true)} style={styles.addTaskButton}>
          <Image source={require('./assets/addtask.png')} style={styles.addTaskIcon} />
        </TouchableOpacity>
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
    padding: 10,
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
  taskActions: {
    flexDirection: 'row',
  },
  icon: {
    width: 25,
    height: 25,
    marginHorizontal: 5,
  },
  addTaskButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#EEEEEE',
    borderRadius: 50,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 2.2,
  },
  addTaskIcon: {
    width: 45,
    height: 45,
  },
  taskInputContainer: {
    position: 'absolute',
    bottom: 200,
    left: 15,
    right: 15,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  taskInput: {
    height: 40,
    borderColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF'
  },
  taskInputActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#EEEEEE',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#EEEEEE',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#FFC200',
    fontSize: 16,
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
  }
});

export default PendingTasksPanel;
