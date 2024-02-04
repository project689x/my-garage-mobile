import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {AuthStore} from '../Store';

const Index = () => {
  const {isAuthenticated} = useSelector(
    (state: AuthStore) => state.authenticationDetails,
  );
  console.log(isAuthenticated);
  return (
    <View>
      <Text>Index</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
