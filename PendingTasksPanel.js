import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList } from 'react-native';

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

  const handleDeleteTask = (id) => {
    onDeleteTask(id);
  };

  const handleDoneTask = (id) => {
    const task = tasks.find(t => t.id === id);
    onDoneTask(task);
  };

  const handleCancel = () => {
    setNewTask('');
    setEditingTaskId(null);
    setTaskInputVisible(false);
  };

  const renderTaskItem = ({ item }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskName}>{item.name}</Text>
      {showIcons && (
        <View style={styles.taskActions}>
          <TouchableOpacity onPress={() => handleEditTask(item.id)}>
            <Image source={editIcon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
            <Image source={deleteIcon} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDoneTask(item.id)}>
            <Image source={doneIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      )}
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
      {taskInputVisible && (
        <View style={styles.taskInputContainer}>
          <TextInput
            style={styles.taskInput}
            value={newTask}
            onChangeText={setNewTask}
            placeholder="Enter task name"
          />
          <View style={styles.taskInputActions}>
            <TouchableOpacity onPress={editingTaskId ? handleSaveEdit : handleAddTask} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>{editingTaskId ? 'Save' : 'Add Task'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel} style={styles.cancelButton}>
              <Text style={styles.submitButtonText}>{editingTaskId ? 'Cancel' : 'Cancel'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {!taskInputVisible && (
        <TouchableOpacity onPress={() => setTaskInputVisible(true)} style={styles.addTaskButton}>
          <Image source={require('./assets/addtask.png')} style={styles.addTaskIcon} />
        </TouchableOpacity>
      )}
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
    backgroundColor: '#F1F5A8',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
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
    backgroundColor: '#D2D180',
    borderRadius: 50,
    padding: 10,
    elevation: 5,
  },
  addTaskIcon: {
    width: 50,
    height: 50,
  },
  taskInputContainer: {
    position: 'absolute',
    bottom: 200,
    left: 15,
    right: 15,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    elevation: 5, // For Android shadow
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 4 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 6, // Shadow radius for iOS
  },
  taskInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff'
  },
  taskInputActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#E5E483',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#B2B377',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default PendingTasksPanel;
