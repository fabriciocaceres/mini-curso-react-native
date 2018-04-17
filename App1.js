/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Container, Header, Content, Button, Text, Body, Left, Right, Title } from 'native-base';

export default class App extends Component {
  render() {
    return (
        <Container>
            <Header>
                <Body>
                    <Title>Contact list</Title>
                </Body>
            </Header>
            <Content>
                <Button onPress={() => { Alert.alert("Click Me", "Você clicou :)")}}>
                    <Text>Click Me!</Text>
                </Button>
            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

