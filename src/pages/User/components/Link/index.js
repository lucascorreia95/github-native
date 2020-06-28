import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Alert, Linking } from 'react-native';

import { StyledText } from './styles';

export default function Link({ url, children }) {
  if (!url) {
    return null;
  }

  const handlePress = useCallback(async () => {
    let newUrl = url;
    let supported = await Linking.canOpenURL(url);

    if (!supported) {
      supported = await Linking.canOpenURL(`http://${url}`);
      newUrl = `http://${url}`;
    }

    if (supported) {
      await Linking.openURL(newUrl);
    } else {
      Alert.alert(`Não foi possível abrir esta URL: ${url}`);
    }
  }, [url]);

  return <StyledText onPress={handlePress}>{children}</StyledText>;
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
