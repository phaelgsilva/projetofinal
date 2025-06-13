// filepath: /quadras-app/quadras-app/src/components/comum/Botao.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BotaoProps {
  title: string;
  onPress: () => void;
  color?: string;
}

const Botao: React.FC<BotaoProps> = ({ title, onPress, color = '#007BFF' }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Botao;