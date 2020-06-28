import styled from 'styled-components/native';

export const StyledView = styled.View`
  flex: 1;
  flex-flow: row;
  justify-content: space-around;
  padding: 15px;
`;

export const StyledTextTouchable = styled.Text`
  color: #fff;
  font-size: 12px;
  text-align: center;
`;

export const StyledTouchable = styled.TouchableOpacity`
  background-color: #24292e;
  height: 30px;
  padding: 5px;
  border-radius: 4px;
  flex-flow: row;
  justify-content: center;
  align-items: center;
`;
