import Base from '@/components/base';
import ButtonCore from '@/components/buttons/button';
import InputCore from '@/components/inputs/input';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { View, StyleSheet, Text, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const router = useRouter();
  const [email, setEmail] = React.useState<string | null>(null)
  const [password, setPassword] = React.useState<string | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean | null>(null)

  const handleLogin = async () => {
    if (email && password) {
      setLoading(true);
      const fetchOptions: RequestInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      };
      const response = await fetch(`https://api-dm-finance.vercel.app/api/v1/auth`, fetchOptions);
      const result = await response.json();
      if (response.ok) {
        setError(null)
        await AsyncStorage.setItem('@user_token', result.token);
        router.push('/home');
      } else {
        setLoading(null);
        return setError(result.message)
      }
      setLoading(null);
      setError(null)
    }
  };

  function create() {
    router.push('/create');
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.container}>
      <Text style={styles.text}>Bem Vindo!</Text>
      <Base>
        <View style={styles.input}>
          <InputCore title="Usuário ou Email" type='default' placeholder="Usuário ou Email" onChangeText={setEmail} />
          <InputCore title="Senha" type='default' secure={true} IconSecure={true} placeholder="********" onChangeText={setPassword} />
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
        <View style={styles.action}>
          <ButtonCore onPress={handleLogin} disabled={loading}>
            {loading ? 'Carregando...' : 'Logar'}
          </ButtonCore>
          <Link href={'reset'} style={styles.reset}>Esqueci a senha!</Link>
          <ButtonCore onPress={create} variable='secondary'>Criar</ButtonCore>
        </View>
      </Base>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -50
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
  reset: {
    textDecorationLine: 'underline',
    color: '#031314',
    fontSize: 16
  },
  error: {
    textAlign: 'center',
    color: 'red'
  }
});
