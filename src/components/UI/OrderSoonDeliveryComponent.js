import React from 'react';
import {View, Text} from 'react-native';
import {mounth3Lettter, weekDays} from '../../utils/date';
import {addWordsToInterval, capitalizeFirstLetter} from '../../utils';
import calcNearOrder from '../../utils/calcNearOrder';
import {OrderSoonDeliveryComponentStyles as styles} from './styles';
import {connect} from 'react-redux';
import {Colors} from '../../contstants';
function OrderSoonDeliveryComponent({data, fullDateNow}) {
  const nearOrderData = calcNearOrder(data.deliveries, fullDateNow);
  console.log('nearOrderData', nearOrderData);
  return (
    <View style={styles.container}>
      {nearOrderData.length === 0 ? (
        <View>
          <Text>Дата ближайшей доставки не известна</Text>
        </View>
      ) : (
        <>
          <View style={styles.dateElement}>
            <Text style={styles.mountText}>
              {capitalizeFirstLetter(
                mounth3Lettter[new Date(nearOrderData[0].date).getMonth()],
              )}
            </Text>
            <Text style={styles.mountDayText}>
              {new Date(nearOrderData[0].date).getDay()}
            </Text>
          </View>
          <View style={styles.infoComponent}>
            <Text style={styles.nearDateText}>Ближайшая доставка </Text>
            <Text style={[styles.nearDateText, {color: Colors.primaryBlue}]}>
              в {weekDays[new Date(nearOrderData[0].date).getDay()]} -
            </Text>
            <Text style={[styles.intervalText, {marginTop: 15}]}>
              {addWordsToInterval(nearOrderData[0].interval)}
            </Text>
            <Text style={styles.addressText} numberOfLines={1}>
              {nearOrderData[0].address}
            </Text>
          </View>
        </>
      )}
    </View>
  );
}

function mapStateToProps(state) {
  return {
    fullDateNow: state.dateReducer.fullDateNow,
  };
}

const mapDispatch = {};
export default connect(
  mapStateToProps,
  mapDispatch,
)(OrderSoonDeliveryComponent);
