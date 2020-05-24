import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';

import github from '../../assets/images/GitHub-Mark-120px-plus.png';

import {
  StyledTextDescription,
  StyledTextInput,
  StyledTextTitle,
  StyledTextTouchable,
  StyledView,
  StyledTouchable,
} from './styles';

export default function Home({ navigation }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <StyledView>
          <Image source={github} />
          <View>
            <StyledTextTitle>Bem vindo ao GitHub App!</StyledTextTitle>
            <StyledTextDescription>
              Digite o texto da sua busca:
            </StyledTextDescription>
          </View>
          <StyledTextInput
            placeholder="Digite um nome ... "
            returnKeyType="search"
            onChangeText={(value) => setSearchValue(value)}
            onSubmitEditing={({ nativeEvent }) =>
              navigation.navigate('List', {
                searchValue: nativeEvent.text,
              })
            }
            value={searchValue}
            autoFocus
            enablesReturnKeyAutomatically
            autoCapitalize="none"
            autoCorrect={false}
          />
          <StyledTouchable
            onPress={() =>
              navigation.navigate('List', {
                searchValue,
              })
            }
          >
            <StyledTextTouchable>Buscar!</StyledTextTouchable>
          </StyledTouchable>
        </StyledView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

Home.propTypes = {
  navigation: PropTypes.any.isRequired,
};
