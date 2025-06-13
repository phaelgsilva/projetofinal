// filepath: quadras-app/src/screens/perfil/Perfil.tsx

import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

const Perfil = () => {
  const { user, logout } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome: {user?.displayName}</Text>
      <Text>Email: {user?.email}</Text>
      <Button title="Sair" onPress={logout} />
    </View>
  );
};

export default Perfil;