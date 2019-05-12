/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, Platform, StyleSheet, Text, View} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';

const PageA = ({navigation}) => (
    <View style={{flex: 1}}>
        <Button onPress={() => navigation.push('PageB')} title="Push"/>
    </View>
);

const PageB = () => (
    <View style={styles.container}>
      <Button onPress={() => alert("TEST")} title="TEST"/>
      <View style={StyleSheet.absoluteFill}>
          <View style={{flex: 1}}/>
      </View>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default createAppContainer(createStackNavigator({
    PageA,
    PageB
}));
