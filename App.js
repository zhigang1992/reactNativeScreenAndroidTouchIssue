/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createFluidNavigator} from "react-navigation-fluid-transitions";

const PageA = ({navigation}) => (
    <View style={{flex: 1}}>
        <Button onPress={() => navigation.push('PageB')} title="Push"/>
    </View>
);

const PageB = () => (
    <View style={styles.container}>
      <Button onPress={() => alert("TEST")} title="TEST"/>
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

export default createAppContainer(createFluidNavigator({
    PageA,
    PageB
}));
