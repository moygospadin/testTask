import React from 'react';
import {View, Text} from 'react-native';
import {OneOrderScreenStyles as styles} from './styles';
import {constStyles} from '../../contstants';
import {BackBtnHeader} from '../../components/headers';
import {
  HeaderCardComponent,
  ProgressBarComponent,
  OrderDaysComponent,
} from '../../components';
function OneOrderScreen({route}) {
  const data = route.params.data;
  console.log('data', data);
  return (
    <View style={constStyles.container}>
      <BackBtnHeader />
      <View style={styles.container}>
        <HeaderCardComponent data={data} />
        <ProgressBarComponent data={data} />
        <OrderDaysComponent data={data} />
        <Text style={styles.boldText}>Доставки</Text>
      </View>
    </View>
  );
}

export default OneOrderScreen;
