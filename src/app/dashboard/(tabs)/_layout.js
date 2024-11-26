import React from 'react';
import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const DashboardLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6aa84f',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name="home-outline" 
              size={22} 
              color={focused ? '#6aa84f' : 'gray'} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="profile" 
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name="person-outline" 
              size={22} 
              color={focused ? '#6aa84f' : 'gray'} 
            />
          ),
        }} 
      />
      <Tabs.Screen 
        name="settings" 
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => (
            <Ionicons 
              name="cog-outline" 
              size={22} 
              color={focused ? '#6aa84f' : 'gray'} 
            />
          ),
        }} 
      />
    </Tabs>
  );
};

export default DashboardLayout;
