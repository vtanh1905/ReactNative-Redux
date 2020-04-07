import React from 'react'
import { Button } from 'react-native';
import { connect } from 'react-redux'

import { counterIncrease } from '../actions'

function ButtonRise(props) {
  const { increaseCounter } = props;
  return (
    <Button
      title="Increase"
      onPress={increaseCounter}
    />
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increaseCounter: () => {
      dispatch(counterIncrease());
    }
  }
}

export default connect(null, mapDispatchToProps)(ButtonRise)

