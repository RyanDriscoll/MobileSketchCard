import React from 'react';
import { Button, StyleSheet, View, Picker } from 'react-native';

export default function Batter(props) {

  function renderPicker() {
    return (
      <Picker>
        {
          props.roster.map(player => {
            return (
              <Picker.Item
                key={player.uniform_number}
                label={player.display_name}
                value={player.display_name}
              />
            );
          })
        }
      </Picker>
    );
  }

  return props.roster.length ? renderPicker() : null;
}
