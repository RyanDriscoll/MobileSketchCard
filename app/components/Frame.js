import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Image
} from 'react-native';
import Sketch from 'react-native-sketch';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  sketch: {
    width: '100%',
    height: 250, // Height needed; Default: 200px
  },
});

class Frame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawing: null,
    };
    this.clear = this.clear.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }


  /**
   * Clear / reset the drawing
   */
  clear() {
    this.sketch.clear();
  }

  /**
   * Do extra things after the sketch reset
   */
  onReset() {
    console.log('The drawing has been cleared!');
  }

  /**
   * The Sketch component provides a 'saveImage' function (promise),
   * so that you can save the drawing in the device and get an object
   * once the promise is resolved, containing the path of the image.
   */
  onSave() {
    this.sketch.saveImage(this.state.drawing)
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }

  /**
   * On every update (touch up from the drawing),
   * you'll receive the base64 representation of the drawing as a callback.
   */
  onUpdate(base64Image) {
    console.log('in update');
    this.setState({ drawing: base64Image });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{position: 'absolute', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../../frame.png')} style={{}} />
        </View>
        <Sketch
          fillColor="transparent"
          strokeColor="black"
          strokeThickness={5}
          imageType="png"
          onReset={this.onReset}
          onUpdate={this.onUpdate}
          clearButtonHidden={true}
          ref={(sketch) => { this.sketch = sketch; }}
          style={styles.sketch}
        />
        <Button
          onPress={this.clear}
          title="Clear drawing"
        />
        <Button
          disabled={!this.state.drawing}
          onPress={this.onSave}
          title="Save drawing"
        />
      </View>
    );
  }

}

export default Frame;
