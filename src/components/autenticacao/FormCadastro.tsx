import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../comum/Input';
import Botao from '../comum/Botao';
import { cadastrarUsuario } from '../../services/firebase'; // Função para cadastrar usuário

const FormCadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCadastro = async () => {
    setLoading(true);
    setError('');

    try {
      await cadastrarUsuario(email, senha, nome);
      // Redirecionar ou mostrar mensagem de sucesso
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Input
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Input
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />
      <Botao title={loading ? 'Carregando...' : 'Cadastrar'} onPress={handleCadastro} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default FormCadastro;