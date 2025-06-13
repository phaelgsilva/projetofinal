import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Input from '../../components/comum/Input';
import { useAuth } from '../../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = async () => {
    try {
      await login(email, senha);
    } catch (error) {
      setErro('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      {erro ? <Text style={styles.erro}>{erro}</Text> : null}
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
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  erro: {
    color: 'red',
    marginBottom: 16,
  },
});

export default Login;