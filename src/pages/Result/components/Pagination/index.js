import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import getPaginationData from '../../../../helpers/getPaginationData';
import getOrder from '../../../../helpers/getOrder';

import { StyledTextTouchable, StyledTouchable, StyledView } from './styles';

export default function Pagination({ data, setPage, setLoading }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const newArrPages = [];

    Object.keys(data).forEach((page) => {
      const order = getOrder(data[page]);
      data[page].order = order;
      newArrPages.push(data[page]);
    });

    setPages(
      newArrPages.sort((a, b) => {
        if (a.order > b.order) {
          return 1;
        }
        if (a.order < b.order) {
          return -1;
        }
        return 0;
      })
    );
  }, []);

  function getPageElement(page) {
    const { textPage, key, pageNumber } = getPaginationData(page);

    return (
      <StyledTouchable
        key={key}
        onPress={() => {
          setLoading(true);
          setPage(pageNumber);
        }}
      >
        <StyledTextTouchable>{textPage}</StyledTextTouchable>
      </StyledTouchable>
    );
  }

  return <StyledView>{pages.map((page) => getPageElement(page))}</StyledView>;
}

Pagination.propTypes = {
  data: PropTypes.object.isRequired,
  setPage: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
