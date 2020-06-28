import styled from 'styled-components/native';

export const StyledSafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;

export const StyledView = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 15px;
`;

export const StyledAvatarImg = styled.Image`
  width: 220px;
  height: 220px;
  border-radius: 120px;
  margin: 0 auto;
  margin-bottom: 30px;
`;

export const StyledText = styled.Text`
  font-size: 18px;
  color: #000;
  margin: 5px 0;
`;

export const StyledTextTouchable = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

export const StyledTouchable = styled.TouchableOpacity`
  background-color: #24292e;
  width: 70%;
  height: 40px;
  padding: 10px;
  border-radius: 4px;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`;
