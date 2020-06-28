import React from 'react';
import Lottie from 'lottie-react-native';

import loadingEffect from '../../assets/effects/loading.json';

import { StyledView } from './styles';

export default function Loading() {
  return (
    <StyledView>
      <Lottie
        resizeMode="contain"
        autoSize
        source={loadingEffect}
        autoPlay
        loop
      />
    </StyledView>
  );
}
