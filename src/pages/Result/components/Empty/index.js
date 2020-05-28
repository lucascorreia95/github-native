import React from 'react';

import {
  StyledTextTouchable,
  StyledTouchable,
  StyledFooterList,
} from './styles';

export default function Empty() {
  return (
    <StyledFooterList>
      <StyledTouchable onPress={() => {}}>
        <StyledTextTouchable>Nada foi encontrado!</StyledTextTouchable>
      </StyledTouchable>
    </StyledFooterList>
  );
}
