import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button, Snackbar } from "react-native-paper";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Routes from '../../routes';



export default function Login() {
    const login = {
        email: "",
        senha: "",
      };
    
      const [state, setState] = useState(login);
    
      const handleChange = (value, target) => {
        setState((state) => ({ ...state, [target]: value }));
      };

  

    const navigation = useNavigation();

    const irToHome= () => {
        navigation.navigate('Routes');
    }
   
    return (
        <View style={styles.container}>
        <Text>Login</Text>
        <TextInput
          style={styles.marginTop}
          label="Digite o login"
          placeholder="Digite seu login"
          value={state.email}
          onChangeText={(text) => handleChange(text, "email")}
        />
        <TextInput
          label="Digite a senha"
          style={styles.marginTop}
          placeholder="Digite sua senha"
          value={state.senha}
          onChangeText={(text) => handleChange(text, "senha")}
        />

         <Button mode="contained" style={styles.marginTop} onPress={irToHome}>
          Entrar
        </Button> 


        </View>
    );
  }



  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    marginTop: {
      marginTop: "20%",
      width: "70%"
    },
  });