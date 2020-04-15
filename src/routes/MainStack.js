import React from 'react';
import {useDispatch} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, TouchableOpacity} from 'react-native';

import {AppConfigActions} from '../redux/actions';
import Home from '../screens/Home';
import Users from '../screens/Users';

const Stack = createStackNavigator();

export default ({navigation}) => {
  const dispatch = useDispatch();

  const options = {
    headerLeft: () => (
      <TouchableOpacity onPress={navigation.openDrawer}>
        <Text style={{margin: 8}}>Esquerdo</Text>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
        onPress={() => dispatch(AppConfigActions.toggleRightDrawer())}>
        <Text style={{margin: 8}}>Direito</Text>
      </TouchableOpacity>
    ),
  };

  return (
    <Stack.Navigator>
      <Stack.Screen options={options} name="HomeScreen" component={Home} />
      <Stack.Screen options={options} name="UsersScreen" component={Users} />
    </Stack.Navigator>
  );
};
