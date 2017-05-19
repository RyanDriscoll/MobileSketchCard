import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import { ActionCreators } from '../actions';
import Game from '../components/Game';

import { Text, StyleSheet, View } from 'react-native';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getGames();
  }
  render() {
    return (
      <View />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
