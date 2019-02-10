import React from 'react'
import { Component } from 'react'
import { Alert } from 'react-native'
import { NavigationInjectedProps, withNavigation } from 'react-navigation'
import { TokenContext } from '../../../core/auth/TokenContext'
import { LoginMutation } from '../../../graphql/auth/LoginMutation'
import { AuthForm } from '../components/AuthForm'

class LoginFormUnplugged extends Component<NavigationInjectedProps> {
  onLogin = async (data, setToken) => {
    await setToken(data.login)
    this.props.navigation.navigate('App')
  }

  onError = () => {
    Alert.alert('OPS...', 'Email ou Senha errados', [{ text: 'Try Again', onPress: () => null }], {
      cancelable: false,
    })
  }

  render() {
    return (
      <TokenContext.Consumer>
        {({ setToken }) => (
          <LoginMutation
            onCompleted={(data) => {
              console.log(data)
              this.onLogin(data, setToken)
            }}
            onError={(...args) => {
              console.log(args)
              this.onError()
            }}
          >
            {(login) => (
              <AuthForm
                buttonText="Login"
                onSubmit={({ email, password }) => {
                  login({
                    variables: { email, password },
                  })
                }}
              />
            )}
          </LoginMutation>
        )}
      </TokenContext.Consumer>
    )
  }
}

export const LoginForm = withNavigation(LoginFormUnplugged)
