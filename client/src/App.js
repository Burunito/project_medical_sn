import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import AppNavbar from './components/common/AppNavBar';
import AuthForm from './components/auth/form/AuthForm';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <AppNavbar/>
        <Container>
          <AuthForm/>
        </Container>
      </div>
      </Provider>
    );
  }
}

export default App;
