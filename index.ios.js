import React from 'react';
import { AppRegistry } from 'react-native';
import AppContainer from './app/containers/AppContainer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware
  )
);

const store = createStore(reducer, enhancer);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

AppRegistry.registerComponent('MobileSketchCard', () => App);

// export default class MobileSketchCard extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Frame />
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

// AppRegistry.registerComponent('MobileSketchCard', () => MobileSketchCard);
