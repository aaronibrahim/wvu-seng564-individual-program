import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Stack } from 'expo-router/stack';
import { default as HomeScreen } from "@/app/\(tabs)/index";
import { default as SortScreen } from "@/app/\(tabs)/sort";
import { useNavigation } from '@react-navigation/native';




export const MyStack = (props) => {

  const {navigation} = props;

  return (

    <Stack>
        <Stack.Screen
          name="Welcome"
          
          options={{title: 'Welcome'}}
          
        />
        <Stack.Screen
          name="Sort"
          
          options={{title: 'My Home Target'}}
          
        />        
      </Stack>
  );
};