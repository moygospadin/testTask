import {StyleSheet} from 'react-native';
import {Colors} from '../../contstants';
export const LoginScreenStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', justifyContent: 'center'},
  contentContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.3,
  },
  textInput: {
    width: '91%',
    height: 56,
    backgroundColor: '#fff',
    borderColor: Colors.primaryBlue,
    borderWidth: 2,
    borderRadius: 6,
    alignSelf: 'center',
    fontSize: 18,
    lineHeight: 21.6,
    color: '#000',
    paddingLeft: 11,
    marginBottom: 12,
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000',
  },
  btn: {
    width: '91%',
    height: 65,
    backgroundColor: Colors.primaryBlue,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 38,
  },
});
