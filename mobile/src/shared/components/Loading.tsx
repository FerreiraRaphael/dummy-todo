import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Container, Props } from './Container'

export const Loading = ({ style, ...props }: Props) => (
  <Container center {...props} style={style}>
    <ActivityIndicator />
  </Container>
)
