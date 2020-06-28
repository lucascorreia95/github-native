import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';

import GitHubAPI from '../../services/github';

import Error from '../../components/Error';
import Loading from '../../components/Loading';
import CustomLink from './components/Link';

import {
  StyledSafeAreaView,
  StyledAvatarImg,
  StyledText,
  StyledView,
  StyledTouchable,
  StyledTextTouchable,
} from './styles';

export default function User({ route, navigation: { goBack } }) {
  const { userUrl } = route.params;
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await GitHubAPI.get(userUrl);
        setUser(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setErrorState(true);
      }
    };

    getUser();
  }, []);

  return (
    <StyledSafeAreaView>
      {errorState && <Error />}

      {loading && !errorState && <Loading />}

      {user && !loading && !errorState && (
        <StyledView showsVerticalScrollIndicator={false}>
          <StyledAvatarImg
            source={{
              uri: user.avatar_url,
            }}
          />

          {user.name && <StyledText>Nome: {user.name}</StyledText>}
          {user.location && <StyledText>Local: {user.location}</StyledText>}
          {user.email && <StyledText>E-mail: {user.email}</StyledText>}
          {user.company && <StyledText>Empresa: {user.company}</StyledText>}

          <StyledText>Número de Seguidores: {user.followers}</StyledText>
          <StyledText>Número de Repositórios: {user.public_repos}</StyledText>

          <CustomLink url={user.blog}>{`Blog: ${user.blog}`}</CustomLink>

          <CustomLink
            url={user.html_url}
          >{`GitHub: ${user.html_url}`}</CustomLink>

          {user.bio && <StyledText>Bio: {user.bio}</StyledText>}

          <StyledTouchable onPress={() => goBack()}>
            <Feather
              name="arrow-left"
              size={18}
              color="#fff"
              style={{ marginRight: 4 }}
            />
            <StyledTextTouchable>Voltar</StyledTextTouchable>
          </StyledTouchable>
        </StyledView>
      )}
    </StyledSafeAreaView>
  );
}

User.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};
