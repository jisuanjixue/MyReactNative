import React from 'react';
import { Text, Button,View, SafeAreaView, ActivityIndicator, Image, StyleSheet } from 'react-native';
// import {GET_TWEET} from '../service/product';

// static navigationOptions = {
//     title: 'Details',
// };


const DetailsScreen = ({navigation}) => {
return (
    <View style={styles.container}>
        <Text>Details Screen</Text>
        <Button
            title="Go to Details... again"
            onPress={() => navigation.push('Details')}
        />
        <Button
            title="Go to Home"
            onPress={() => navigation.navigate('Home')}
        />
        <Button
            title="Go back"
            onPress={() => navigation.goBack()}
        />
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 50
    }
});

export default DetailsScreen;