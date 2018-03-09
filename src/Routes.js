import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormLogin from './components/FormLogin';
import Principal from './components/FormPrincipal';
import Cadastro from './components/FormCadastro';

export default props => (
  <Router navigationBarStyle={{ backgroundColor: '#115E54' }} titleStyle={{ color: 'white' }}>
    <Scene key='root'>
      <Scene key='formlogin' component={FormLogin} hideNavBar />
      <Scene key='formcadastro' component={Cadastro} hideNavBar />
      <Scene key='formprincipal' component={Principal} hideNavBar />
    </Scene>
  </Router>
);
