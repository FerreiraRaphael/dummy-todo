import gql from 'graphql-tag'
import React from 'react'
import { Mutation, MutationFn, MutationProps, MutationResult } from 'react-apollo'

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`

export interface LoginMutationOutput {
  login: MutationFn<string>
  result: MutationResult<string>
}

export const LoginMutation = (props: Partial<MutationProps>) =>
  <Mutation {...props} mutation={LOGIN} children={props.children} />
