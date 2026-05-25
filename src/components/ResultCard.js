import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

//Se 'melhorOpcao' estiver vazia (estado inicial, antes de clicar no botão), 
  //o componente retorna 'null', fazendo com que nada apareça na tela do usuário
export default function ResultCard({ melhorOpcao, porcentagem }) {
  if (!melhorOpcao) return null;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Abasteça com: {melhorOpcao.toUpperCase()}</Text>
      <Text style={styles.text}>
        O etanol está custando {porcentagem}% da gasolina.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#036685',
    borderRadius: 12,
    padding: 18,
    marginTop: 20,
    backgroundColor: '#152530',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#2196f3',
  },
  text: {
    fontSize: 15,
    color: '#ffffff',
    textAlign: 'center',
  },
});
