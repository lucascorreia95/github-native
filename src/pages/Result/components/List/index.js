import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';

import Item from '../Item';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function List({ dataList }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={dataList}
        renderItem={({ item }) => <Item user={item} />}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}

List.propTypes = {
  dataList: PropTypes.array.isRequired,
};
