import ButtonCore from '@/components/buttons/button';
import InputCore from '@/components/inputs/input';
import { useRouter } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  function logar() {
    console.log('logar')
  }

  function create() {
    router.push('/create');
  }

  function inputText(text: string) {
    console.log("🚀 ~ inputText ~ text:", text)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem Vindo!</Text>
      <View style={styles.content}>
        <InputCore title="Usuário ou Email" type='default' secure={false} onChangeText={(text) => inputText(text)} />
        <InputCore title="Senha" type='default' secure={true} onChangeText={(text) => inputText(text)} />
        <ButtonCore onPress={logar}>Logar</ButtonCore>
        <ButtonCore onPress={create} variable='secondary'>Criar</ButtonCore>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: "center",
    color: "#F0F4FF",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 30,
    textTransform: "capitalize",
    paddingTop: 65,
    paddingBottom: 65,
  },
  content: {
    flex: 2,
    backgroundColor: "#fff",
    height: 745,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    justifyContent: "flex-start"
  },
});
