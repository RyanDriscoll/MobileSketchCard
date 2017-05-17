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
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  imageContainer: {
    position: 'absolute',
    top: 20,
    width: 300,
    height: 400
  }
});

class Frame extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawing: [],
      erase: false
    };
    this.clear = this.clear.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.undo = this.undo.bind(this);
    this.toggleDrawErase = this.toggleDrawErase.bind(this);
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
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  undo() {
    this.sketch.clear();
    const drawings = this.state.drawing.slice(0, -1);
    this.setState({drawing: drawings});
  }

  toggleDrawErase() {
    this.setState({erase: !this.state.erase});
  }

  /**
   * On every update (touch up from the drawing),
   * you'll receive the base64 representation of the drawing as a callback.
   */
  onUpdate(base64Image) {
    this.setState({ drawing: this.state.drawing.concat(base64Image) });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require('../../frame.png')} style={{width: '100%'}} />
        </View>
        {
          !!this.state.drawing.length && this.state.drawing.map((drawing, i) => {
            return (
              <View style={styles.imageContainer} key={i}>
                <Image
                  source={{uri: drawing}}
                  style={{
                    height: '100%',
                    width: '100%'
                  }}
                />
              </View>
            );
          })
        }
        <Sketch
          fillColor="transparent"
          strokeColor={this.state.erase ? '#FFF' : '#000'}
          strokeThickness={10}
          imageType="png"
          onReset={this.onReset}
          onUpdate={this.onUpdate}
          clearButtonHidden={true}
          ref={(sketch) => { this.sketch = sketch; }}
          style={styles.imageContainer}
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
        <Button
          onPress={this.undo}
          title="Undo"
        />
        <Button
          onPress={this.toggleDrawErase}
          title={this.state.erase ? 'Draw' : 'Erase'}
        />

      </View>
    );
  }

}

export default Frame;
