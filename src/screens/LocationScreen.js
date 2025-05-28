import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getLocationData } from '../services/viacepApi';

export default function LocationScreen() {
  const navigation = useNavigation();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const data = await getLocationData('01001000'); // Exemplo de CEP válido
        if (data && !data.erro) {
          setLocation(data);
        } else {
          setError('Localização não encontrada para este CEP.');
        }
      } catch (err) {
        setError('Erro ao buscar localização. Verifique sua conexão.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Localização</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#646D75" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <View style={styles.infoBox}>
          <Text style={styles.text}>Cidade: {location.localidade}</Text>
          <Text style={styles.text}>Estado: {location.uf}</Text>
          <Text style={styles.text}>Bairro: {location.bairro || 'N/A'}</Text>
          <Text style={styles.text}>Rua: {location.logradouro || 'N/A'}</Text>
        </View>
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
    justifyContent: 'center',
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
    borderRadius: 12,
    padding: 20,
    borderWidth: 2,
    borderColor: '#646D75',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  text: {
    fontSize: 18,
    color: '#646D75',
    marginBottom: 10,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginTop: 30,
    backgroundColor: '#646D75',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
