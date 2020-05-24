/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import PropTypes from 'prop-types';
import parse from 'parse-link-header';

import GitHubAPI from '../../services/github';
import List from './components/List';

export default function Result({ route }) {
  const { searchValue } = route.params;
  const [dataList, setDataList] = useState([]);
  const [pagination, setPagination] = useState({});
  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    const getList = async () => {
      try {
        const { data, headers } = await GitHubAPI.get(
          `/search/users?q=${searchValue}`
        );
        setDataList(data.items);
        setPagination(parse(headers.link));
      } catch (error) {
        console.log(error);
        setErrorState(true);
      }
    };
    getList();
  }, []);

  return (
    <SafeAreaView>
      <Text>Resultado:</Text>
      {dataList.length > 0 && <List dataList={dataList} />}
    </SafeAreaView>
  );
}

Result.propTypes = {
  route: PropTypes.any.isRequired,
};
