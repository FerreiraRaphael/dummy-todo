import React from 'react'
import { Component } from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

interface Props {}

class DummyClass extends Component<Props> {
  render() {
    return <View style={styles.container} />
  }
}

const DummyFunction = () => <View style={styles.container} />

interface Style {
  container: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
})
