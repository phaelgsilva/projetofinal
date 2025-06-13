// filepath: /quadras-app/quadras-app/src/components/quadras/CardQuadra.tsx

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CardQuadraProps {
  nome: string;
  localizacao: string;
  onPress: () => void;
}

const CardQuadra: React.FC<CardQuadraProps> = ({ nome, localizacao, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.localizacao}>{localizacao}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    elevation: 2,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  localizacao: {
    fontSize: 14,
    color: '#666',
  },
});

export default CardQuadra;