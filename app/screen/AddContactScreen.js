import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Body, Left, Right, Title } from 'native-base';

import { connect } from 'react-redux';

export default class ContactsScreen extends Component {
    render() {
        return (
            <Container>
                <Header>
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