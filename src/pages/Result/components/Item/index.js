import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export default function Item({ user }) {
  return (
    <View>
      <Text>{user.login}</Text>
    </View>
  );
}

Item.propTypes = {
  user: PropTypes.object.isRequired,
};
