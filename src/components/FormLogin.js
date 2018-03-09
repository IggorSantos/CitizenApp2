import React, { Component } from 'react';
import {
   View,
   StyleSheet,
   TextInput,
   TouchableOpacity,
   TouchableHighlight,
   Text,
   Image
  } from 'react-native';
import { Actions } from 'react-native-router-flux';

 export default class Login extends Component {
     render() {
       return (
         <View style={style.tela}>

             <View style={style.logo}>
               <Image style={{ width: 120, height: 120 }} source={require('../imgs/logo.png')} />
             </View>

             <View style={style.formulario}>
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
                   <TouchableOpacity style={style.touchableAcessar} onPress={() => Actions.formprincipal()}>
                       <Text style={style.textoBotao}>Acessar</Text>
                   </TouchableOpacity>
                   <View style={{ alignItems: 'center' }}>
                       <Text style={style.ou}>ou</Text>
                   </View>
                   <View style={{ alignItems: 'center' }}>
                       <TouchableOpacity style={style.touchableFace} onPress={() => false}>
                           <Text style={style.textoBotaoFace}>Entrar com Facebook</Text>
                       </TouchableOpacity>
                   </ View>
                 </View>

                <View style={style.rodape}>
                  <TouchableHighlight onPress={() => false}>
                     <Text style={{ marginLeft: 10, marginRight: 30, color: '#1A237E' }}>Esqueci a senha</Text>
                  </TouchableHighlight>

                  <TouchableHighlight onPress={() => Actions.formcadastro()}>
                    <Text style={{ marginRight: 10, marginLeft: 30, color: '#1A237E' }}>Cadastre-se</Text>
                  </TouchableHighlight>
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
     logo: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       padding: 15
     },
     formulario: {
       flex: 2,
       paddingTop: 10,
       justifyContent: 'flex-start'
     },
     ou: {
       paddingBottom: 30,
       color: '#1A237E',
       fontSize: 18,
       borderColor: 'transparent',
       borderWidth: 1
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
     textoBotaoFace: {
        color: '#CFD8DC',
        borderWidth: 1,
        fontWeight: 'bold',
        borderColor: 'transparent',
        fontSize: 14
     },
     touchableAcessar: {
       backgroundColor: '#A5D6A7',
       padding: 10,
       alignItems: 'center',
       borderRadius: 10,
       width: 300
     },
     touchableFace: {
       backgroundColor: '#3b5998',
       padding: 10,
       alignItems: 'center',
       borderRadius: 10,
       width: 300
     },
     rodape: {
       justifyContent: 'space-between',
       flexDirection: 'row',
       marginTop: 50
     }
   });
