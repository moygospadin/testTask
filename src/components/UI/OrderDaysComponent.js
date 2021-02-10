import React from 'react';
import {View, Text} from 'react-native';
import {calcDayWithMount, differenceBetweenDates} from '../../utils/date';
import {OrderDaysComponentStyles as styles} from './styles';

function OrderDaysComponent({data}) {
  console.log('data', data);
  const date2 = data.deliveries[data.deliveries.length - 1].date;
  const date1 = data.deliveries[0].date;
  return (
    <View style={styles.container}>
      <Text>{calcDayWithMount(date1)}</Text>
      <Text>Осталось {differenceBetweenDates(date1, date2)} дней</Text>
      <Text>{calcDayWithMount(date2)}</Text>
    </View>
  );
}

export default OrderDaysComponent;
