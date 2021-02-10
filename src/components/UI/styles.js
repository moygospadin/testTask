import {StyleSheet} from 'react-native';
import {Colors, windowSize} from '../../contstants';

const {width} = windowSize;
export const InfoOrderCardStyles = StyleSheet.create({
  container: {
    width: width - 25,
    alignSelf: 'center',
    backgroundColor: Colors.cardsGray,
    paddingHorizontal: 11,
    paddingTop: 35,
    paddingBottom: 17,
    marginBottom: 14,
  },
});
export const HeaderCardComponentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bigBoldText: {
    fontWeight: 'bold',
    fontSize: 35,
    color: '#000000',
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
    width: '91%',
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
  },
});

export const OderSoonDeliveryComponentStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
