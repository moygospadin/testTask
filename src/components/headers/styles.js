import {StyleSheet} from 'react-native';
import {Colors} from '../../contstants';

export const BackBtnHeaderStyles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  text: {
    fontSize: 17,
    color: Colors.primaryBlue,
  },
});
