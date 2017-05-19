import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import { ActionCreators } from '../actions';

import { Text, StyleSheet, View } from 'react-native';

class ScorecardContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getRosters;
  }
  render() {
    return (
      <View>
        <Text>ScorecardContainer text</Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    games: state.default.games
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ScorecardContainer);
