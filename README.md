# quadras-app

Este é um aplicativo de reservas de quadras esportivas desenvolvido com React Native e Expo. O aplicativo permite que os usuários se cadastrem, façam login, visualizem quadras disponíveis, reservem quadras e acessem seu histórico de reservas.

## Estrutura do Projeto

```
quadras-app
├── src
│   ├── api
│   │   └── firebase.ts
│   ├── components
│   │   ├── autenticacao
│   │   │   ├── FormLogin.tsx
│   │   │   └── FormCadastro.tsx
│   │   ├── quadras
│   │   │   ├── CardQuadra.tsx
│   │   │   └── ListaQuadras.tsx
│   │   └── comum
│   │       ├── Botao.tsx
│   │       ├── Input.tsx
│   │       └── Carregando.tsx
│   ├── config
│   │   ├── cores.ts
│   │   └── tema.ts
│   ├── hooks
│   │   └── useAuth.ts
│   ├── navigation
│   │   ├── AppNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   └── types.ts
│   ├── screens
│   │   ├── auth
│   │   │   ├── Login.tsx
│   │   │   └── Cadastro.tsx
│   │   ├── quadras
│   │   │   ├── DetalhesQuadra.tsx
│   │   │   └── ListagemQuadras.tsx
│   │   ├── perfil
│   │   │   └── Perfil.tsx
│   │   └── reservas
│   │       └── HistoricoReservas.tsx
│   ├── services
│   │   └── firebase.ts
│   └── types
│       └── index.ts
├── App.tsx
├── app.json
├── babel.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/quadras-app.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd quadras-app
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Configure o Firebase:
   - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
   - Adicione as credenciais do Firebase no arquivo `src/api/firebase.ts`.

5. Inicie o aplicativo:
   ```bash
   expo start
   ```

## Uso

- **Login**: Acesse a tela de login para entrar na sua conta.
- **Cadastro**: Crie uma nova conta na tela de cadastro.
- **Listagem de Quadras**: Visualize as quadras disponíveis.
- **Detalhes da Quadra**: Veja informações detalhadas sobre uma quadra específica.
- **Reservas**: Reserve uma quadra e acesse seu histórico de reservas.
- **Perfil**: Gerencie suas informações de perfil e faça logout.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.