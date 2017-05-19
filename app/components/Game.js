import React from 'react';
import {
  Button,
  StyleSheet,
  View
} from 'react-native';

export default function Game(props) {
  const game = props.game;
  return (
    <Button
      onPress={() => console.log('clicked')}
      title={`${game.awayName} vs. ${game.homeName}`}
    />
  );
}
