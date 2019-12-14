import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Form, Input, SubmitButton} from './styles';

class Main extends React.Component {
  render() {
    return (
      <Container>
        <Form>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Adicionar usuario"
          />
          <SubmitButton>
            <Icon name="add" size={20} color="#fff" />
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}

Main.navigationOptions = {
  title: 'Usuarios',
};
export default Main;
