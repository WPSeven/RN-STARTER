import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const HomeScreen = ({ navigation }) => {

  return (
    <View><Text style={styles.text}>HI WP7</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title='Got to Components Demo'
      />
      <Button
        onPress={() => navigation.navigate('List')}
        title='Got to List'
      />
      <Button
        onPress={() => navigation.navigate('Image')}
        title='Got to Image Screen'
      />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title='Got to Counter Screen'
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title='Got to Color Screen'
      />
      <Button
        onPress={() => navigation.navigate('Square')}
        title='Got to Square Screen'
      />
      <Button
        onPress={() => navigation.navigate('Text')}
        title='Got to Text Screen'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
