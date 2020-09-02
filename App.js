import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import { apolloClient } from './apollo';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
const RootStack =  createAppContainer(AppNavigator)

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <RootStack />
    </ApolloProvider>
  );
}
