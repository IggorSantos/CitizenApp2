import React, { Component } from 'react';
import {
   View,
   StyleSheet,
   TextInput,
   TouchableOpacity,
   TouchableHighlight,
   Text
  } from 'react-native';
import { Actions } from 'react-native-router-flux';

 export default class Cadastro extends Component {
     render() {
       return (
         <View style={style.tela}>
             <View style={style.formulario}>
                 <TextInput
                   value={this.props.email}
                   placeholder='Nome'
                   placeholderTextColor='#BDBDBD'
                   style={style.inputNome}
                   underlineColorAndroid="transparent"
                 />
                 <TextInput
                   value={this.props.email}
                   placeholder='E-mail'
                   placeholderTextColor='#BDBDBD'
                   style={style.inputEmail}
                   underlineColorAndroid="transparent"
                 />
                 <TextInput
                   secureTextEntry
                   value={this.props.senha}
                   placeholder='Senha'
                   placeholderTextColor='#BDBDBD'
                   style={style.inputSenha}
                   underlineColorAndroid="transparent"
                 />
                 <View>
                   <TouchableOpacity style={style.touchableCadastrar} onPress={() => false}>
                       <Text style={style.textoBotao}>Cadastrar</Text>
                   </TouchableOpacity>
                 </View>
             </View>

         </View>
       );
     }
   }

   const style = StyleSheet.create({
     tela: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#E3F2FD'
     },
     formulario: {
       flex: 2,
       paddingTop: 10,
       justifyContent: 'center'
     },
     inputSenha: {
       fontSize: 20,
       margin: 2,
       marginBottom: 15,
       backgroundColor: 'white',
       borderRadius: 50,
       width: 300,
       paddingLeft: 15
     },
     inputNome: {
       fontSize: 20,
       margin: 2,
       marginBottom: 15,
       backgroundColor: 'white',
       borderRadius: 50,
       width: 300,
       paddingLeft: 15
     },
     inputEmail: {
       fontSize: 20,
       backgroundColor: 'white',
       width: 300,
       borderRadius: 50,
       marginBottom: 10,
       paddingLeft: 15
     },
     textoBotao: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14
     },
     touchableCadastrar: {
       backgroundColor: '#A5D6A7',
       padding: 10,
       alignItems: 'center',
       borderRadius: 10,
       width: 300
     }
   });
