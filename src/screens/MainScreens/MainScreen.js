import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {InfoOrderCard} from '../../components';
import {constStyles} from '../../contstants';
import {MainScreenStyles as styles} from './styles';

function MainScreen({ordersData}) {
  console.log('ordersData', ordersData);
  return (
    <View style={constStyles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={ordersData}
        renderItem={({item}) => <InfoOrderCard data={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
function mapStateToProps(state) {
  return {
    ordersData: state.ordersReducer.ordersData,
  };
}

const mapDispatch = {};
export default connect(mapStateToProps, mapDispatch)(MainScreen);
