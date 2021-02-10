import React from 'react';
import {View, Text} from 'react-native';
import HeaderCardComponent from './HeaderCardComponent';
import OrderDaysComponent from './OrderDaysComponent';
import ProgressBarComponent from './ProgressBarComponent';
import {InfoOrderCardStyles as styles} from './styles';

function InfoOrderCard({data}) {
  return (
    <View style={styles.container}>
      <HeaderCardComponent data={data} />
      <ProgressBarComponent data={data} />
      <OrderDaysComponent data={data} />
    </View>
  );
}
export default InfoOrderCard;
