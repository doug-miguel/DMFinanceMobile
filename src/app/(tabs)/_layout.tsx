import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveBackgroundColor: '#3B82F6',
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#000',
        tabBarButton: (props) => <TouchableOpacity {...props} />,
        tabBarStyle: [styles.tabBar, Platform.OS === 'ios' && styles.tabBarIOS],
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => {
            return <Feather name="home" size={24} color={color} />;
          }
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          tabBarIcon: ({ color }) => {
            return <MaterialCommunityIcons name="bank-transfer" size={24} color={color} />;
          }
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ color }) => {
            return <MaterialIcons name="category" size={24} color={color} />;
          }
        }}
      />
      <Tabs.Screen
        name="detailscategoria/[id]"
        options={{ tabBarButton: () => null }}
      />
      <Tabs.Screen
        name="expenses"
        options={{ tabBarButton: () => null }}
      />
      <Tabs.Screen
        name="editUser"
        options={{ tabBarButton: () => null }}
      />
      <Tabs.Screen
        name="user"
        options={{
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="user-circle-o" size={24} color={color} />;
          }
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#F0F4FF',
  },
  tabBarIOS: {
    marginBottom: -50
  }
});