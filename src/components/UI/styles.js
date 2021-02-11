import {StyleSheet} from 'react-native';
import {Colors, windowSize} from '../../contstants';

const {width} = windowSize;
export const InfoOrderCardStyles = StyleSheet.create({
  container: {
    width: width - 25,
    borderRadius: 6,
    alignSelf: 'center',
    backgroundColor: Colors.cardsGray,
    paddingHorizontal: 11,
    paddingTop: 30,
    paddingBottom: 17,
    marginBottom: 14,
  },
});
export const HeaderCardComponentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    marginBottom: 25,
  },
  bigBoldText: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#000000',
    textAlignVertical: 'top',
    marginTop: -7,
  },
  smallBoldText: {
    fontWeight: 'bold',
    fontSize: 13.8133,
    color: '#000000',
  },
  grayText: {
    fontWeight: 'bold',
    fontSize: 9.75059,

    color: '#B1B1B1',
  },
});

export const ProgressBarComponentStyles = StyleSheet.create({
  bar: {
    width: '100%',
    height: 5.5,
    backgroundColor: '#E9E9E9',
    alignSelf: 'center',
    borderRadius: 4,
    flexDirection: 'row',

    alignItems: 'center',
  },
  blueBar: {
    backgroundColor: Colors.primaryBlue,
    height: 5.5,
    borderRadius: 4,
    marginRight: -4,
  },
  dot: {
    width: 7,
    height: 7,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export const OrderDaysComponentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  text: {
    fontWeight: '500',
    fontSize: 11,
    color: '#9E9E9E',
  },
});

export const OrderSoonDeliveryComponentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 24,
  },
  dateElement: {
    width: 57,
    height: 100,
    backgroundColor: Colors.primaryBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  mountText: {
    fontWeight: '500',
    fontSize: 11,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  mountDayText: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  infoComponent: {
    marginLeft: 23,
    width: 200,
  },
  nearDateText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#242424',
  },
  intervalText: {
    fontWeight: '500',
    fontSize: 12,
    color: '#313131',
  },
  addressText: {
    fontSize: 12,

    color: '#949494',
  },
});
