import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import HeaderCardComponent from './HeaderCardComponent';
import OrderDaysComponent from './OrderDaysComponent';
import OrderSoonDeliveryComponent from './OrderSoonDeliveryComponent';
import ProgressBarComponent from './ProgressBarComponent';
import {InfoOrderCardStyles as styles} from './styles';

function InfoOrderCard({data}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('OneOrderScreen', {data})}>
        <HeaderCardComponent data={data} />
        <ProgressBarComponent data={data} />
        <OrderDaysComponent data={data} />
        <OrderSoonDeliveryComponent data={data} />
      </TouchableOpacity>
    </View>
  );
}
export default InfoOrderCard;
