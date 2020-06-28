import React from 'react';
import PropTypes from 'prop-types';

import {
  StyledAvatarImg,
  StyledTouchableOpacity,
  StyledView,
  StyledTextLogin,
  StyledTextID,
  StyledInfoView,
} from './styles';

export default function Item({ user, navigation }) {
  const { login, avatar_url: avatarUrl, id, url } = user;

  return (
    <StyledView>
      <StyledTouchableOpacity
        onPress={() => {
          navigation.navigate('User', {
            userUrl: url,
          });
        }}
      >
        <StyledAvatarImg
          source={{
            uri: avatarUrl,
          }}
        />
        <StyledInfoView>
          <StyledTextLogin numberOfLines={1}>{login}</StyledTextLogin>
          <StyledTextID>ID: {id}</StyledTextID>
        </StyledInfoView>
      </StyledTouchableOpacity>
    </StyledView>
  );
}

Item.propTypes = {
  user: PropTypes.object.isRequired,
  navigation: PropTypes.any.isRequired,
};
