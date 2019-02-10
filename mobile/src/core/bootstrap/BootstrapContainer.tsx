import React from 'react'
import { Component } from 'react'
import { NavigationInjectedProps } from 'react-navigation'
import { MeQuery } from '../../graphql/user/MeQuery'
import { Container } from '../../shared/components/Container'
import { LoadingContext } from '../loading/LoadingContext'

interface State {
  bootstrapped: boolean
}

export class BootstrapContainer extends Component<NavigationInjectedProps, State> {
  state = {
    bootstrapped: false,
  }

  handleCompleted = ({ setLoading, data }) => {
    console.log('completed', data)
    setLoading(false)
    this.props.navigation.navigate(data && data.me ? 'App' : 'Auth')
  }

  render() {
    return (
      <LoadingContext.Consumer>
        {({setLoading}) => (
          <MeQuery
            onCompleted={(data) => {
              if (!this.state.bootstrapped) {
                this.handleCompleted({
                  data,
                  setLoading,
                })
              }
            }}
            onError={(e) => {
              this.handleCompleted({
                setLoading,
                data: null
              })
            }}
          >
            {() => (
              <Container />
            )}
          </MeQuery>
        )}
      </LoadingContext.Consumer>
    )
  }
}
