import React from 'react';
import Lottie from 'lottie-react-native';

import errorEffect from '../../assets/effects/error.json';

import { StyledView, StyledTextError } from './styles';

export default function Error() {
  return (
    <StyledView>
      <StyledTextError>Oops... Erro ao realizar sua busca!</StyledTextError>
      <Lottie
        resizeMode="contain"
        autoSize
        source={errorEffect}
        autoPlay
        style={{
          width: 200,
          height: 200,
        }}
      />
    </StyledView>
  );
}
