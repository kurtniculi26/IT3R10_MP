import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import PendingTasksPanel from './PendingTasksPanel';
import CompletedTasksPanel from './CompletedTasksPanel';

export default function App() {
  const [upperPanelText, setUpperPanelText] = useState('Pending Tasks');
  const [currentPanel, setCurrentPanel] = useState('pendingTasks');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([{ id: Date.now().toString(), name: newTask }, ...tasks]);
  };

  const handleEditTask = (id, newName) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, name: newName } : task
    ));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleDoneTask = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id));
    setCompletedTasks([{ ...task, id: Date.now().toString() }, ...completedTasks]);
  };

  const renderHomePanel = () => {
    switch (currentPanel) {
      case 'pendingTasks':
        return <PendingTasksPanel 
                  tasks={tasks}
                  onAddTask={handleAddTask}
                  onEditTask={handleEditTask}
                  onDeleteTask={handleDeleteTask}
                  onDoneTask={handleDoneTask} />;
      case 'completedTasks':
        return <CompletedTasksPanel tasks={completedTasks} />;
      case 'settings':
        return <SettingsPanel />;
      default:
        return <PendingTasksPanel 
                  tasks={tasks}
                  onAddTask={handleAddTask}
                  onEditTask={handleEditTask}
                  onDeleteTask={handleDeleteTask}
                  onDoneTask={handleDoneTask} />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Upper Panel */}
      <View style={styles.upperPanel}>
        <Text style={styles.Crypt}>Crypt</Text>
        <Text style={styles.upperPannelText}>{upperPanelText}</Text>
      </View>

      {/* Home Panel */}
      <View style={styles.homePanel}>
        {renderHomePanel()}
      </View>

      {/* Lower Panel */}
      <View style={styles.lowerPanel}>
        {/* Pending Tasks */}
        <TouchableOpacity onPress={() => {
          setUpperPanelText('Pending Tasks');
          setCurrentPanel('pendingTasks');
        }}>
          <Image source={require('./assets/tasks.png')} style={styles.lowerPanelIcon} />
        </TouchableOpacity>

        {/* Completed Tasks */}
        <TouchableOpacity onPress={() => {
          setUpperPanelText('Completed Tasks');
          setCurrentPanel('completedTasks');
        }}>
          <Image source={require('./assets/completed.png')} style={styles.lowerPanelIcon} />
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Crypt: {
    position: 'absolute',
    fontSize: 21,
    bottom: 32,
    left: 15,
  },
  upperPanel: {
    height: 120,
    backgroundColor: '#B2B377',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  upperPannelText: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 15,
  },
  homePanel: {
    flex: 1,
    backgroundColor: '#8a6749',
  },
  lowerPanel: {
    height: 100,
    backgroundColor: '#B2B377',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  lowerPanelIcon: {
    width: 30,
    height: 30,
  },
});
