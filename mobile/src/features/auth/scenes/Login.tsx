import React from 'react'
import { Text } from 'react-native'
import { Box } from '../../../shared/components/Box'
import { Column } from '../../../shared/components/Column'
import { Container } from '../../../shared/components/Container'
import { theme } from '../../../shared/theme/theme'
import { LoginForm } from '../containers/LoginForm'

export const Login = () => (
  <Column padding={theme.unit * 3} >
    <Box center height={50} width="100%" >
      <Text> Login </Text>
    </Box>
    <Container>
      <LoginForm />
    </Container>
  </Column>
)
