import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import Lottie from 'lottie-react-native';

import Item from '../Item';
import emptyEffect from '../../../../assets/effects/empty.json';
import Pagination from '../Pagination';

import {
  StyledView,
  StyledResultFeedback,
  StyledEmptyView,
  StyledEmptyText,
} from './styles';

export default function List({
  data,
  searchValue,
  pagination,
  setPage,
  setLoading,
  navigation,
}) {
  const { items, total_count: totalCount } = data;

  if (items.length === 0) {
    return (
      <StyledEmptyView>
        <StyledEmptyText>Nenhum resultado foi encontrado!</StyledEmptyText>
        <Lottie
          autoSize
          source={emptyEffect}
          autoPlay
          loop
          style={{
            width: 200,
            height: 200,
          }}
        />
      </StyledEmptyView>
    );
  }

  return (
    <StyledView>
      <StyledResultFeedback>
        Encontrado {totalCount} com {`"${searchValue}"`}
      </StyledResultFeedback>

      <FlatList
        data={items}
        renderItem={({ item }) => <Item user={item} navigation={navigation} />}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          pagination ? (
            <Pagination
              data={pagination}
              setPage={setPage}
              setLoading={setLoading}
            />
          ) : null
        }
      />
    </StyledView>
  );
}

List.defaultProps = {
  pagination: {},
};

List.propTypes = {
  data: PropTypes.object.isRequired,
  searchValue: PropTypes.string.isRequired,
  pagination: PropTypes.object,
  setPage: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  navigation: PropTypes.any.isRequired,
};
