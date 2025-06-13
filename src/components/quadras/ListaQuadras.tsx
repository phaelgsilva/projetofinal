import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { buscarQuadras } from '../../api/firebase';
import CardQuadra from './CardQuadra';
import Carregando from '../comum/Carregando';

const ListaQuadras = () => {
  const [quadras, setQuadras] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarQuadras = async () => {
      try {
        const dadosQuadras = await buscarQuadras();
        setQuadras(dadosQuadras);
      } catch (error) {
        console.error("Erro ao buscar quadras: ", error);
      } finally {
        setCarregando(false);
      }
    };

    carregarQuadras();
  }, []);

  if (carregando) {
    return <Carregando />;
  }

  return (
    <View>
      <FlatList
        data={quadras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardQuadra quadra={item} />}
      />
    </View>
  );
};

export default ListaQuadras;