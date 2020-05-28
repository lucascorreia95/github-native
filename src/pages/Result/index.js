/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'parse-link-header';

import GitHubAPI from '../../services/github';
import List from './components/List';

import { StyledSafeAreaView } from './styles';

export default function Result({ route }) {
  const { searchValue } = route.params;
  const [dataState, setDataState] = useState({});
  const [pagination, setPagination] = useState({});
  const [errorState, setErrorState] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const getList = async () => {
      try {
        const { data, headers } = await GitHubAPI.get(
          `/search/users?q=${searchValue}`
        );
        setDataState(data);
        setPagination(parse(headers.link));
        console.log(parse(headers.link));
      } catch (error) {
        console.log(error);
        setErrorState(true);
      }
    };
    getList();
  }, []);

  useEffect(() => {
    const getList = async () => {
      try {
        const { data, headers } = await GitHubAPI.get(
          `/search/users?q=${searchValue}&page=${page}`
        );
        setDataState({ ...data, items: [...dataState.items, ...data.items] });
        console.log('chamou nova página: ', data);
        setPagination(parse(headers.link));
      } catch (error) {
        console.log(error);
        setErrorState(true);
      }
    };

    if (page > 1) {
      getList();
    }
  }, [page]);

  const handlePressFooter = () => {
    if (pagination.next) {
      setPage(pagination.next.page);
    }
  };

  return (
    <StyledSafeAreaView>
      {dataState && (
        <List
          data={dataState}
          searchValue={searchValue}
          handlePressFooter={handlePressFooter}
        />
      )}
    </StyledSafeAreaView>
  );
}

Result.propTypes = {
  route: PropTypes.any.isRequired,
};
