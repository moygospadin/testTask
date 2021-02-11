import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {calcProgressBarWidth} from '../../utils';
import {ProgressBarComponentStyles as styles} from './styles';

function ProgressBarComponent({data, fullDateNow}) {
  const width = calcProgressBarWidth(data.deliveries, fullDateNow);
  return (
    <View style={styles.bar}>
      <View style={[styles.blueBar, {width: `${width}%`}]} />
      <View style={styles.dot} />
    </View>
  );
}

function mapStateToProps(state) {
  return {
    fullDateNow: state.dateReducer.fullDateNow,
  };
}

const mapDispatch = {};
export default connect(mapStateToProps, mapDispatch)(ProgressBarComponent);
