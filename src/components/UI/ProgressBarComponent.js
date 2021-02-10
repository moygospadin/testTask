import React from 'react';
import {View} from 'react-native';
import {calcProgressBarWidth} from '../../utils';
import {ProgressBarComponentStyles as styles} from './styles';

function ProgressBarComponent({data}) {
  const width = calcProgressBarWidth(data.deliveries);
  return (
    <View style={styles.bar}>
      <View style={[styles.blueBar, {width: `${width}%`}]} />
      <View style={styles.dot} />
    </View>
  );
}

export default ProgressBarComponent;
