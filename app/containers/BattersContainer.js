import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import { ActionCreators } from '../actions';

import { Text, StyleSheet, View } from 'react-native';

class BattersContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }
  render() {
    return (
      <View>
        <Text>BattersContainer text</Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    homeRoster: state.default.homeRoster,
    awayRoster: state.default.awayRoster
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BattersContainer);
