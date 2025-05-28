import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AlertItem({ title, description }) {
  return (
    <View style={styles.alertBox}>
      <Ionicons name="warning" size={24} color="red" />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  alertBox: {
    flexDirection: 'row',
    backgroundColor: '#fee',
    padding: 10,
    marginVertical: 5,
    borderLeftWidth: 5,
    borderLeftColor: 'red',
    borderRadius: 4,
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontWeight: 'bold',
  },
});
