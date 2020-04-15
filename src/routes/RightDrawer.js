import React, {useEffect} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import LeftDrawer from './LeftDrawer';
import {useDispatch, useSelector} from 'react-redux';
import {DrawerActions} from '@react-navigation/native';

import {AppConfigActions} from '../redux/actions';
import {View} from 'react-native';

const Drawer = createDrawerNavigator();

export default ({navigation}) => {
  const {rightDrawerState} = useSelector((state) => state.appConfig);
  const dispatch = useDispatch();

  useEffect(() => {
    if (rightDrawerState === 'toggle') {
      navigation.dispatch(DrawerActions.openDrawer());
      dispatch(AppConfigActions.resetRightDrawer());
    }
  }, [rightDrawerState === 'toggle']);

  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={(props) => <CustomDrawerComp {...props} />}>
      <Drawer.Screen name="LeftDrawer" component={LeftDrawer} />
    </Drawer.Navigator>
  );
};

export const CustomDrawerComp = (props) => {
  const {navigation} = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{flexGrow: 2}}>
        <DrawerItem
          label="Usuários"
          onPress={() => navigation.navigate('UsersScreen')}
        />
      </View>
    </DrawerContentScrollView>
  );
};
