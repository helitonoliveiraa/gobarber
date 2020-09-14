import React from 'react';
import {useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Routes() {
  const signed = useSelector(state => state.auth.signed);

  return (
    <NavigationContainer>
      {signed ? (
        <Tab.Navigator
          initialRouteName="Dashboard"
          tabBarOptions={{
            keyboardHidesTabBar: true,
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
            style: {
              backgroundColor: '#205072',
              borderTopColor: 0,
            },
          }}>
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              tabBarLabel: 'Agendamentos',
              tabBarIcon: ({color}) => (
                <Icon name="event" size={20} color={color} />
              ),
            }}
          />

          <Tab.Screen
            name="NewAppointment"
            options={{
              unmountOnBlur: true,
              tabBarLabel: 'Agendar',
              tabBarIcon: ({color}) => (
                <Icon name="add-circle-outline" size={20} color={color} />
              ),
              tabBarVisible: false,
            }}>
            {() => (
              <Stack.Navigator
                initialRouteName="SelectProvider"
                screenOptions={{
                  headerTransparent: true,
                  headerTintColor: '#fff',
                  headerTitleAlign: 'center',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                }}>
                <Stack.Screen
                  name="SelectProvider"
                  component={SelectProvider}
                  options={({navigation}) => ({
                    title: 'Selecione o prestador',
                    headerLeft: () => (
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Dashboard')}>
                        <Icon name="chevron-left" size={20} color="#fff" />
                      </TouchableOpacity>
                    ),
                  })}
                />
                <Stack.Screen
                  name="SelectDateTime"
                  component={SelectDateTime}
                  options={({navigation}) => ({
                    title: 'Selecione o horário',
                    headerLeft: () => (
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="chevron-left" size={20} color="#fff" />
                      </TouchableOpacity>
                    ),
                  })}
                />
                <Stack.Screen
                  name="Confirm"
                  component={Confirm}
                  options={({navigation}) => ({
                    title: 'Confirmaragendamento',
                    headerLeft: () => (
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon name="chevron-left" size={20} color="#fff" />
                      </TouchableOpacity>
                    ),
                  })}
                />
              </Stack.Navigator>
            )}
          </Tab.Screen>

          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              tabBarLabel: 'Meu perfil',
              tabBarIcon: ({color}) => (
                <Icon name="person" size={20} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{
            headerTitle: '',
            headerTransparent: true,
            headerLeft: null,
          }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
