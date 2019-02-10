import gql from 'graphql-tag'
import React, { Component } from 'react'
import { Subscription } from 'react-apollo'
import { Alert, Text } from 'react-native'
import { Container } from '../../../shared/components/Container'

const sub = gql`
  subscription bye {
    bye
  }
`

export class HomeScreen extends Component {
  public render() {
    return (
      <Subscription
        subscription={sub}
        onSubscriptionData={(data) => Alert.alert(JSON.stringify(data))}
        onSubscriptionComplete={(...args) => console.log('completed', args)}
      >
        {(...args) => {
          console.log('e ai ??', args)
          return (
            <Container center>
              <Text> Hello </Text>
            </Container>
          )
        }}
      </Subscription>
    )
  }
}
