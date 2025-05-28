import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getLocationData } from '../services/viacepApi';

export default function LocationScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLocationData('01001000') // Exemplo de CEP
      .then(data => {
        setLocation(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar localização:', error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Localização</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#646D75" />
      ) : (
        location && (
          <View style={styles.infoBox}>
            <Text style={styles.text}>Cidade: {location.localidade}</Text>
            <Text style={styles.text}>Estado: {location.uf}</Text>
            <Text style={styles.text}>Bairro: {location.bairro}</Text>
            <Text style={styles.text}>Rua: {location.logradouro}</Text>
          </View>
        )
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.backButtonText}>Voltar ao Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6D7DA',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#646D75',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#646D75',
  },
  text: {
    fontSize: 16,
    color: '#646D75',
    marginBottom: 5,
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#646D75',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});