import React, { Component } from 'react';
import InputText from '../../common/input/Text';
import InputPassword from '../../common/input/Password';
import { ValidatorForm } from 'react-form-validator-core';

import { connect } from 'react-redux';
import { signin } from '../../../actions/itemActions';

class LoginBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { errors: [] };
  }

  handleSubmit(event){

  }

  showValidationError(input, msg){
    this.setState((prevState) => ({ errors: [...prevState.errors, {input, msg }] } ));
  }

  clearValidationError(input){
    this.setState((prevState) => {
      let newArr = [];
      for(let error of prevState.errors) {
        if( input != error.input) {
          newArr.push(error);
        }
      }

      return newArr;
    })
  }

  inputChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    let inputError = {};
    for(let error of this.state.errors) {
      if(!inputError[error.input])
        inputError[error.input] = error.msg;
      else
        inputError[error.input] += "\n" + error.msg;
    }
    return (
    <form onSubmit={this.handleSubmit.bind(this)}>
      <div className="p-1 form-data">
        <div className="text-center">
          <h2>Ingresar</h2>
        </div>
      	<div className="row">
          <div className="col-12">
            <InputText 
              label='Usuario'
              placeholder='Usuario'
              name="username"
              changeCallback={this.inputChangeHandler.bind(this)}
            />
            <small className="danger"> { inputError['username'] ? inputError['username'] : '' }</small>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <InputPassword
              label='Contraseña'
              placeholder='Contraseña'
              name="password"
              changeCallback={this.inputChangeHandler.bind(this)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="form-group text-center">
        		  <button type="button" className="login-btn">
              Ingresar
              </button>
        		</div>
          </div>
      	</div>
      	<div className="box-container">
      	</div>
      </div>
    </form>
    );
  }
}

export default LoginBox;
