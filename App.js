import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import PendingTasksPanel from './PendingTasksPanel';
import CompletedTasksPanel from './CompletedTasksPanel';

export default function App() {
  const [upperPanelText, setUpperPanelText] = useState('');
  const [currentPanel, setCurrentPanel] = useState('pendingTasks');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false); // State to control search bar visibility
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleRemoveTask = (id) => {
    setCompletedTasks(completedTasks.filter(task => task.id !== id));
  };

  const handleSearchChange = (text) => {
    setSearchQuery(text);
  };

  const handlePanelSwitch = (panel) => {
    setCurrentPanel(panel);
    setUpperPanelText(panel === 'pendingTasks' ? '' : 'Completed Tasks');

    // Hide the search bar and clear the query when switching to the completed panel
    if (panel === 'completedTasks') {
      setSearchVisible(false);
      setSearchQuery('');
    }
  };

  const renderHomePanel = () => {
    let filteredTasks = tasks.filter(task =>
      task.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (currentPanel) {
      case 'pendingTasks':
        return <PendingTasksPanel
          tasks={filteredTasks}
          onAddTask={handleAddTask}
          onEditTask={handleEditTask} Tasks
          onDeleteTask={handleDeleteTask}
          onDoneTask={handleDoneTask} />;
      case 'completedTasks':
        return <CompletedTasksPanel
          tasks={completedTasks}
          onRemoveTask={handleRemoveTask} />;
      default:
        return <PendingTasksPanel
          tasks={filteredTasks}
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
        <Image source={require('./assets/logo.png')} style={styles.Crypt} />
        {searchVisible && currentPanel === 'pendingTasks' ? (
          <TextInput
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={handleSearchChange}
            placeholder="Search tasks..."
            autoFocus
          />
        ) : (
          <Text style={styles.upperPannelText}>{upperPanelText}</Text>
        )}
        {currentPanel === 'pendingTasks' && (
          <TouchableOpacity onPress={() => {
            setSearchVisible(!searchVisible);
            if (searchVisible) {
              setSearchQuery('');  // Clear search text when exiting search
            }
          }}>
            <Image
              source={searchVisible ? require('./assets/cancelsearch.png') : require('./assets/search.png')}
              style={styles.Search}
            />
          </TouchableOpacity>
        )}

      </View>

      {/* Home Panel */}
      <View style={styles.homePanel}>
        {renderHomePanel()}
      </View>

      {/* Lower Panel */}
      <View style={styles.lowerPanel}>
        {/* Pending Tasks */}
        <TouchableOpacity onPress={() => handlePanelSwitch('pendingTasks')}>
          <Image source={require('./assets/tasks.png')} style={styles.lowerPanelIcon} />
        </TouchableOpacity>

        {/* Completed Tasks */}
        <TouchableOpacity onPress={() => handlePanelSwitch('completedTasks')}>
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
    height: 75,
    width: 75
  },
  Search: {
    width: 35,
    height: 35,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 10,
  },
  upperPanel: {
    height: 100,
    backgroundColor: '#EEEEEE',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  upperPannelText: {
    fontSize: 20,
    textAlign: 'center',
    flex: 1,
  },
  homePanel: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  lowerPanel: {
    height: 100,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  lowerPanelIcon: {
    width: 35,
    height: 35,
  },
});
