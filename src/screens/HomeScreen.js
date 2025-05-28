import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pluvia</Text>
      <Text style={styles.subtitle}>Previsão e Alertas de Chuvas</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Forecast')}>
        <Text style={styles.buttonText}>Previsão do Tempo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Alerts')}>
        <Text style={styles.buttonText}>Alertas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Location')}>
        <Text style={styles.buttonText}>Minha Localização</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>Configurações</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6D7DA',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#646D75',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#646D75',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#646D75',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});