import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StackNavigator } from 'react-navigation';
import { ActionCreators } from '../actions';
import FrameContainer from './FrameContainer';

import {
  Text,
  StyleSheet,
  View
} from 'react-native';

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
   return (
      <FrameContainer />
    );
  }
}

const Home = StackNavigator({
  Home: { screen: AppContainer },
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
