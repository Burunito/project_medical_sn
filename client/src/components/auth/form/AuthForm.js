import React, { Component } from 'react';
import './AuthForm.css';
import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';

class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoginOpen: true, isRegisterOpen: false};
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  showRegisterBox(){
  	this.setState({ isLoginOpen: false, isRegisterOpen: true});
  }

  showLoginBox(){
  	this.setState({ isLoginOpen: true, isRegisterOpen: false});
  }

  render() {
    return (
      <div className="container main-box">
      	<div className="row">
      		<div 
      			className={"col-6 header-button text-center " + (this.state.isLoginOpen ? "selected-menu" : "")} 
      			onClick={this.showLoginBox.bind(this)}
      			>
		      	Ingresar
		      </div>
      		<div className={"col-6 header-button text-center " + (this.state.isRegisterOpen ? "selected-menu" : "")}
      		  onClick={this.showRegisterBox.bind(this)}>
      			Registrar
	      	</div>
      	</div>
      	<div className="container">
      	{this.state.isLoginOpen && <LoginBox />}
      	{this.state.isRegisterOpen && <RegisterBox />}
      	</div>
      </div>
    );
  }
}

export default AuthForm;
