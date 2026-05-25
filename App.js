//Importações
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, StatusBar, Alert } from 'react-native';
import AppButton from './src/components/AppButton';
import ResultCard from './src/components/ResultCard';
import ImageComponent from './src/components/ImageComponent';

export default function App() {
  //Atribuição dos valores digitados pelo usuário as variáveis
  const [precoEtanol, setPrecoEtanol] = useState('');
  const [precoGasolina, setPrecoGasolina] = useState('');
  const [melhorOpcao, setMelhorOpcao] = useState('');
  const [porcentagem, setPorcentagem] = useState('');

  //Substitui a vírgula por ponto (caso o usuário digite com vírgula) e converte o texto para número decimal
  const calcularVantagem = () => {
    const etanol = parseFloat(precoEtanol.replace(',', '.'));
    const gasolina = parseFloat(precoGasolina.replace(',', '.'));

    //Verifica se os campos estão vazios, se não são números (isNaN) ou se são menores/iguais a zero
    if (isNaN(etanol) || isNaN(gasolina) || etanol <= 0 || gasolina <= 0) {
      Alert.alert('Por favor, digite valores válidos para os combustíveis.');
      return;
    }

    //Calcula a relação de preço e transforma em porcentagem
    const relacao = etanol / gasolina;
    const calculoPorcentagem = (relacao * 100).toFixed(1);

    //Condicional para definir qual o combustível mais vantajoso
    if (relacao < 0.7) {
      setMelhorOpcao('Etanol');
    } else {
      setMelhorOpcao('Gasolina');
    }

    setPorcentagem(calculoPorcentagem);
  };

  return (
    //Garante que o conteúdo não fique escondido sob entalhes (notches) ou barras de navegação do dispositivo
    <SafeAreaView style={styles.container}>
    {/*Configura a cor de fundo*/}
      <StatusBar barStyle="light-content" backgroundColor="#1e222b" />
      
      <View style={styles.content}>
        <Text style={styles.headerTitle}>ÁLCOOL OU GASOLINA</Text>
        <Text style={styles.headerSubtitle}>Descubra o combustível ideal para o seu bolso</Text>

    {/*Renderiza o componente que contém a imagem da bomba de combustível*/}
        <ImageComponent />

    {/*Bloco do formulário de entrada de dados */}
        <View style={styles.cardForm}>
          <Text style={styles.label}>Digite o preço do Etanol (R$):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 3.49"
            placeholderTextColor="#7a828e"
            keyboardType="numeric"
            value={precoEtanol}
            onChangeText={setPrecoEtanol}
          />

          <Text style={styles.label}>Digite o preço da Gasolina (R$):</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 5.59"
            placeholderTextColor="#7a828e"
            keyboardType="numeric"
            value={precoGasolina}
            onChangeText={setPrecoGasolina}
          />

          <AppButton title="VERIFICAR VANTAGEM" onPress={calcularVantagem} />
        </View>

        <ResultCard melhorOpcao={melhorOpcao} porcentagem={porcentagem} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e222b',
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 1,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#9ba4b4',
    marginTop: 4,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 12,
    color: '#ffffff',
  },
  input: {
    width: '100%',
    backgroundColor: '#1e222b',
    borderWidth: 1,
    borderColor: '#d8dce4',
    borderRadius: 8,
    padding: 14,
    marginTop: 6,
    fontSize: 16,
    color: '#ffffff',
  },
});
