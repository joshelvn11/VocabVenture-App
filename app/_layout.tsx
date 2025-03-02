import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stack, Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import "../global.css"

const RootLayout = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Tabs>
        <Tabs.Screen 
          name='index'
          options={{
            title: 'Home',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen 
        name='lessons' 
        options={{
            title: 'Lessons',
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'book' : 'book-outline'} size={size} color={color} />
            ),
          }}/>
        <Tabs.Screen
          name='stats'
          options={{
            title: 'Stats',
            tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'stats-chart' : 'stats-chart-outline'} size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  )
}

export default RootLayout