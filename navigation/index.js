import * as React from 'react'
import { Entypo } from '@expo/vector-icons';

import { DarkTheme, DefaultTheme, NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Updates from '../screen/Updates';
import Profile from '../screen/Profile';
import Login from '../screen/Login';
import FriendPage from '../screen/FriendPage';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

const Stack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();


function BottomTabNavigator() {
    const colorScheme = useColorScheme();
  
    return (
      <BottomTab.Navigator
        initialRouteName="Pulse"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: Colors[colorScheme].tint,
        }}>
        <BottomTab.Screen
          name="Pulse"
          component={Updates}
          options={{
              tabBarIcon: ({ color }) => <TabBarIcon name="triangle-up" color={color} />
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={ProfileStackNavigator}
          options={{
            tabBarIcon: ({ color }) => <TabBarIcon name="triangle-up" color={color} />,
          }}
        />
      </BottomTab.Navigator>
    );
  }
  
function ProfileStackNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="UserName"
        component={Profile}
        options={{ headerShown: false}}
      />
      <ProfileStack.Screen 
        name="FriendPage"
        component={FriendPage}
        options={{
            headerTitle: 'Find Friend'
        }}
      />
    </ProfileStack.Navigator>
  )
}

function RootNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

function TabBarIcon(props) {
    return <Entypo size={30} style={{ marginBottom: -3 }} {...props} />;
  }
  

export default function Navigation({ colorScheme }) {
    return (
        <NavigationContainer
            theme={ colorScheme === 'dark' ? DarkTheme : DefaultTheme }
        >
            <RootNavigator />
        </NavigationContainer>
    )
}
