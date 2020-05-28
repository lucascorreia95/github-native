import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import Item from '../Item';
import Footer from '../Footer';
import Empty from '../Empty';

import { StyledView, StyledResultFeedback } from './styles';

export default function List({ data, searchValue, handlePressFooter }) {
  const { items, total_count: totalCount } = data;

  return (
    <StyledView>
      <StyledResultFeedback>
        Encontrado {totalCount} com {`"${searchValue}"`}
      </StyledResultFeedback>

      <FlatList
        data={items}
        renderItem={({ item }) => <Item user={item} />}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => <Footer handlePress={handlePressFooter} />}
        ListEmptyComponent={Empty}
      />
    </StyledView>
  );
}

List.propTypes = {
  data: PropTypes.object.isRequired,
  searchValue: PropTypes.string.isRequired,
  handlePressFooter: PropTypes.func.isRequired,
};
