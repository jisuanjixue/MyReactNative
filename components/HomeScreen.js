import React from 'react';
import { Button, View, Text, SafeAreaView, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import {  ListItem } from 'react-native-elements';
import { gql, useQuery } from '@apollo/client';


const HomeScreen = ({ navigation }) => {
  // static navigationOptions = {
  //   title: 'Home',
  // };

  const GET_POST = gql`
    query {
      posts {
      _id
      title
      content
      }
    }
  `

  const { data, loading, error } = useQuery(GET_POST);

  if (error) { console.error('error', error) };
  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator />
      </SafeAreaView>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
      {
        (data.posts || []).map((l, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{l.title}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))
      }
      </ScrollView>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 50
  },
  list: {
    flex: 1,
    paddingBottom: 22
  }
});

export default HomeScreen;