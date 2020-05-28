import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledTextTouchable,
  StyledTouchable,
  StyledFooterList,
} from './styles';

export default function Footer({ handlePress }) {
  return (
    <StyledFooterList>
      <StyledTouchable onPress={handlePress}>
        <StyledTextTouchable>Carregar mais!</StyledTextTouchable>
      </StyledTouchable>
    </StyledFooterList>
  );
}

Footer.propTypes = {
  handlePress: PropTypes.func.isRequired,
};
