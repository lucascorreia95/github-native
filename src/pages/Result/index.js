import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'parse-link-header';

import GitHubAPI from '../../services/github';

import Error from '../../components/Error';
import Loading from '../../components/Loading';
import List from './components/List';

import { StyledSafeAreaView } from './styles';

export default function Result({ route, navigation }) {
  const { searchValue } = route.params;
  const [dataState, setDataState] = useState({});
  const [pagination, setPagination] = useState({});
  const [errorState, setErrorState] = useState(false);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getList = async () => {
      try {
        const { data, headers } = await GitHubAPI.get(
          `/search/users?q=${searchValue}&page=${page}`
        );
        setDataState(data);
        setPagination(parse(headers.link));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrorState(true);
      }
    };
    getList();

    // just for test
    if (searchValue === 'errortest') {
      setErrorState(true);
    }
  }, [page]);

  return (
    <StyledSafeAreaView>
      {errorState && <Error />}

      {loading && !errorState && <Loading />}

      {dataState && !loading && !errorState && (
        <List
          data={dataState}
          searchValue={searchValue}
          pagination={pagination}
          setPage={setPage}
          setLoading={setLoading}
          navigation={navigation}
        />
      )}
    </StyledSafeAreaView>
  );
}

Result.propTypes = {
  route: PropTypes.any.isRequired,
  navigation: PropTypes.any.isRequired,
};
