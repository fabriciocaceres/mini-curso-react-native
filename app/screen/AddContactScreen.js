import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Icon, Body, Left, Right, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class AddContactScreen extends Component {
    
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => { Actions.pop() }}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Add Contact</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>Add Contact</Text>
                </Content>
            </Container>
        )
    }
}