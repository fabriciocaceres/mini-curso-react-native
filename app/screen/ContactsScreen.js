/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Alert, ScrollView, ListView } from 'react-native';
import { Container, Header, Content, Button, Text, Body, Left, Right, Title, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { connect  } from 'react-redux';

import PessoaComponent from './../components/PessoaComponent';

import { 
    ContactsLoadState,
    ContactsAddContact
} from './../redux/contact/ContactsAction';

class ContactsScreen extends Component {

    //Init before render
    componentWillMount() {
        this.props.ContactsLoadState();
    }

    onContactsAddContact() {
        let contact = {
            name: "Contact"+ Date.now(),
            photo: Math.random()
        }

        this.props.ContactsAddContact(contact);
    }

    renderRows() {
        if(this.props.items.length)
        {
            let rows = this.props.items.map((item, i) => {
                return <PessoaComponent key={i} data={item}  />
            });

            return rows;
        }
    }


    render() {
        const { contactList } = this.props;
        // var contactList = this.props.contactList;
        return (
            <ScrollView>
                <Header>
                    <Left>
                        <Button transparent onPress={() => { this.onGoToBack() }}>
                            <Icon name='arrow-back'  />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Contact list</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => { Actions.pop()}}>
                            <Icon name="add"/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                        { this.renderRows() }
                    </View>
                </Content>
            </ScrollView>
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

//The function takes init state, and insert/link it into the props of component.
//Use this function also to make redux know that this component needs to be passed a state
function mapStateToProps({ contacts }) {
    const { 
        contactList, 
        loading 
    } = contacts;
    
    let dataSource = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    });

    return {
        contactList : dataSource.cloneWithRows(contactList),
        loading,
        items: contactList
    };
}

export default connect(mapStateToProps, {
    ContactsLoadState,
    ContactsAddContact
})(ContactsScreen);