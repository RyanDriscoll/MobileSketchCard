import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default function ToggleTeam(props) {
  const game = props.game;
  return (
    <View>
      <Button
        onPress={() => props.selectTeam('away')}
        title={`${game.awayName}`}
      />
      <Button
        onPress={() => props.selectTeam('home')}
        title={`${game.homeName}`}
      />
    </View>
  );
}
