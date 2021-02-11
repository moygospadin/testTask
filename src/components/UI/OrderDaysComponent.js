import React from 'react';
import {View, Text} from 'react-native';
import {calcDayWithMount, calcDayLeft} from '../../utils/date';
import {OrderDaysComponentStyles as styles} from './styles';
import {connect} from 'react-redux';
function OrderDaysComponent({data, fullDateNow}) {
  console.log('data', data);
  const date2 = data.deliveries[data.deliveries.length - 1].date;
  const date1 = data.deliveries[0].date;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{calcDayWithMount(date1)}</Text>
      <Text style={[styles.text, {color: '#000'}]}>
        Осталось {calcDayLeft(data.deliveries, fullDateNow)} дней
      </Text>
      <Text style={styles.text}>{calcDayWithMount(date2)}</Text>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    fullDateNow: state.dateReducer.fullDateNow,
  };
}

const mapDispatch = {};
export default connect(mapStateToProps, mapDispatch)(OrderDaysComponent);
