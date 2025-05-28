import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function WeatherCard({ temperature, condition, humidity }) {
  return (
    <View style={styles.card}>
      <FontAwesome5 name="cloud-sun" size={32} color="#333" />
      <Text style={styles.temp}>{temperature}°C</Text>
      <Text>{condition}</Text>
      <Text>Umidade: {humidity}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 4,
    margin: 10,
  },
  temp: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
