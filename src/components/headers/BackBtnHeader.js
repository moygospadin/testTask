import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BackBtnHeaderStyles as styles} from './styles';
import {useNavigation} from '@react-navigation/native';
function BackBtnHeader() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.text}>Назад</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BackBtnHeader;
