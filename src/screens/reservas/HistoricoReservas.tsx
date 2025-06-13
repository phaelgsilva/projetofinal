import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getHistoricoReservas } from '../../api/firebase'; // Função para buscar o histórico de reservas
import Carregando from '../../components/comum/Carregando';

const HistoricoReservas = () => {
  const [reservas, setReservas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const dados = await getHistoricoReservas(); // Chama a função para buscar dados
        setReservas(dados);
      } catch (error) {
        console.error("Erro ao buscar histórico de reservas:", error);
      } finally {
        setCarregando(false);
      }
    };

    fetchReservas();
  }, []);

  if (carregando) {
    return <Carregando />; // Exibe o componente de carregamento
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Histórico de Reservas</Text>
      <FlatList
        data={reservas}
        keyExtractor={(item) => item.id} // Supondo que cada reserva tenha um ID único
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.texto}>Quadra: {item.quadra}</Text>
            <Text style={styles.texto}>Data: {item.data}</Text>
            <Text style={styles.texto}>Hora: {item.hora}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  texto: {
    fontSize: 16,
  },
});

export default HistoricoReservas;