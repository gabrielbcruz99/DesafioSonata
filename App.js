import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Rodape from './componentes/Rodape'
import Cabecalho from './componentes/Cabecalho'

import Mensagens from './componentes/Mensagens'
import Contato from './componentes/Contato'
import Logar from './Admin/Logar'
import Login from './Admin/Login'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Cabecalho />
 
          <Route path='/Mensagens'component={Mensagens}/>
          <Route path='/contato'component={Contato}/>
          
          <Route path='/logar'component={Logar}/>
          <Route path='/login'component={Login}/>
          <Rodape />
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;
