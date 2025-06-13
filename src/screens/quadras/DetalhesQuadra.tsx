import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getCourtDetails } from '../../api/firebase'; // Função para buscar detalhes da quadra

const DetalhesQuadra = () => {
  const route = useRoute();
  const { courtId } = route.params; // Recebe o ID da quadra como parâmetro
  const [courtDetails, setCourtDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourtDetails = async () => {
      try {
        const details = await getCourtDetails(courtId);
        setCourtDetails(details);
      } catch (error) {
        console.error("Erro ao buscar detalhes da quadra:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourtDetails();
  }, [courtId]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (!courtDetails) {
    return (
      <View style={styles.container}>
        <Text>Detalhes da quadra não encontrados.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{courtDetails.name}</Text>
      <Text>Localização: {courtDetails.location}</Text>
      <Text>Preço: {courtDetails.price}</Text>
      <Text>Descrição: {courtDetails.description}</Text>
      <Button title="Reservar" onPress={() => {/* Lógica para reservar a quadra */}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DetalhesQuadra;