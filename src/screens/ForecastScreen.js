import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getForecast } from '../services/weatherApi';

export default function ForecastScreen() {
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadForecast() {
      try {
        const data = await getForecast();
        setForecast(data);
      } catch (error) {
        console.error('Erro ao buscar previsão:', error);
      } finally {
        setLoading(false);
      }
    }
    loadForecast();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previsão do Tempo</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#646D75" />
      ) : (
        <Text style={styles.text}>{JSON.stringify(forecast, null, 2)}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Voltar ao Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6D7DA',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#646D75',
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    color: '#646D75',
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#646D75',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#C6D7DA',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
