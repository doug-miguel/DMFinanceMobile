import ButtonCore from '@/components/buttons/button';
import InputCore from '@/components/inputs/input';
import { Link, useRouter } from 'expo-router';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  function logar() {
    console.log('logar')
    router.push('/home');
  }

  function create() {
    router.push('/create');
  }

  function inputText(text: string) {
    console.log("🚀 ~ inputText ~ text:", text)
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
      <Text style={styles.text}>Bem Vindo!</Text>
      <View style={styles.content}>
        <View style={styles.input}>
          <InputCore title="Usuário ou Email" type='default' onChangeText={(text) => inputText(text)} />
          <InputCore title="Senha" type='default' secure={true} IconSecure={true} onChangeText={(text) => inputText(text)} />
        </View>
        <View style={styles.action}>
          <ButtonCore onPress={logar}>Logar</ButtonCore>
          <Link href={'reset'}>Esqueci a senha</Link>
          <ButtonCore onPress={create} variable='secondary'>Criar</ButtonCore>
        </View>
      </View>
    </KeyboardAvoidingView>
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
  input: {
    gap: 23,
    marginBottom: 70
  },
  action: {
    gap: 19,
    alignItems: "center"
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    height: 745,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 90,
    marginBottom: -50
  },
});
