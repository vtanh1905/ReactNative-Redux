import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'

import ButtonRise from './ButtonRise'

function Home(props) {
  const { counter } = props

  return (
    <View style={styles.container}>
      <Text>{counter}</Text>
      <ButtonRise />
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, null)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
