import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { getQuadras } from '../../api/firebase'; // Função para buscar quadras do Firebase
import CardQuadra from '../../components/quadras/CardQuadra';

const ListagemQuadras = () => {
  const [quadras, setQuadras] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuadras = async () => {
      try {
        const data = await getQuadras();
        setQuadras(data);
      } catch (error) {
        console.error("Erro ao buscar quadras:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuadras();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando quadras...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={quadras}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CardQuadra quadra={item} />}
    />
  );
};

export default ListagemQuadras;