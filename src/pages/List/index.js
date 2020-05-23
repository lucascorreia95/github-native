import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function List({ route }) {
  const { searchValue } = route.params;

  return (
    <View style={styles.container}>
      <Text>The List page app!</Text>
      <Text>{searchValue}</Text>
    </View>
  );
}

List.propTypes = {
  route: PropTypes.any.isRequired,
};
