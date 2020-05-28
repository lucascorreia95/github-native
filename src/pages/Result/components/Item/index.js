import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledAvatarImg,
  StyledTouchableOpacity,
  StyledView,
  StyledTextLogin,
  StyledTextID,
} from './styles';

export default function Item({ user }) {
  const { login, avatar_url: avatarUrl, id } = user;

  return (
    <StyledView>
      <StyledTouchableOpacity onPress={() => {}}>
        <StyledAvatarImg
          source={{
            uri: avatarUrl,
          }}
        />
        <StyledView>
          <StyledTextLogin>{login}</StyledTextLogin>
          <StyledTextID>ID: {id}</StyledTextID>
        </StyledView>
      </StyledTouchableOpacity>
    </StyledView>
  );
}

Item.propTypes = {
  user: PropTypes.object.isRequired,
};
