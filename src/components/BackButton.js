import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/globalStyles';

export default function BackButton({ navigation }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.buttonText}>Voltar ao Menu</Text>
    </TouchableOpacity>
  );
}
