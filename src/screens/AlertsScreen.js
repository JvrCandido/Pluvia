import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const mockAlerts = [
  { id: '1', title: 'Tempestade em São Paulo', description: 'Previsão de fortes chuvas.' },
  { id: '2', title: 'Alagamento em Campinas', description: 'Risco de alagamento devido a chuvas intensas.' },
];

export default function AlertsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alertas</Text>
      <FlatList
        data={mockAlerts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.alertTitle}>{item.title}</Text>
            <Text style={styles.alertDescription}>{item.description}</Text>
          </View>
        )}
      />

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
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderColor: '#646D75',
    borderWidth: 1,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#646D75',
  },
  alertDescription: {
    fontSize: 14,
    color: '#646D75',
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