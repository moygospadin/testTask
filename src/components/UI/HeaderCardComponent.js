import React from 'react';
import {View, Text} from 'react-native';
import {HeaderCardComponentStyles as styles} from './styles';

function HeaderCardComponent({data}) {
  const {deliveries, packageName, packageCalories} = data;
  return (
    <View style={styles.container}>
      <Text style={styles.bigBoldText}>{deliveries.length} ДНЕЙ</Text>
      <View>
        <Text style={styles.grayText}>{packageName} </Text>
        <Text style={styles.smallBoldText}>{packageCalories} </Text>
      </View>
    </View>
  );
}
export default HeaderCardComponent;
