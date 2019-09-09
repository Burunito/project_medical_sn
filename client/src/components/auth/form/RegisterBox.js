import React, { Component } from 'react';
import InputText from '../../common/input/Text';
import InputPassword from '../../common/input/Password';
import { connect } from 'react-redux';
import { signup } from '../../../actions/authActions';

class RegisterBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      password: '',
      errors: [] 
    };
  }

  handleSubmit(event){
    event.preventDefault();
    let validation;
    if((validation = this.validateRequired(this.state.username, 'Usuario')) !== true)
      return this.showValidationError('username', validation);
    if((validation = this.validateEmail(this.state.username, 'Usuario'))  !== true)
      return this.showValidationError('username', validation);
    if((validation = this.validateRequired(this.state.password, 'Contraseña'))  !== true)
      return this.showValidationError('password', validation);

    const newUser = {
      username: this.state.username,
      password: this.state.password
    }

    //Add item 
    this.props.signup(newUser);
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

      return {errors: newArr};
    });
  }

  inputChangeHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.clearValidationError(event.target.name);
  }

  validateRequired(value, name){
    if(value === '' || value === undefined || value === null)
      return name + ' es obligatorio';
    return true;
  }

  validateEmail(value, name){
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value))
      return name + ' es obligatorio';
    return true;
  }

  render() {
    
    let inputError = {};
    for(let error of this.state.errors) {
      if(!inputError[error.input])
        inputError[error.input] = [];

      inputError[error.input].push(error.msg);
    }

    return (
    <form onSubmit={this.handleSubmit.bind(this)}>
      <div className="p-1 form-data">
        <div className="text-center">
          <h2>Registrar</h2>
        </div>
        <div className="row">
          <div className="col-12">
            <InputText
              onFocus={this.removeApiError}
              ref={c => { this.userInput = c }}
              type='text' 
              label='Usuario'
              placeholder='Usuario'
              name="username"
              value={this.state.username}
              changeCallback={this.inputChangeHandler.bind(this)}
            />
          { inputError['username'] && 
            inputError['username'].map(function(item) {
              return (
                <div className="alert alert-danger">{item}</div>
              )
            })
          }
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
            { inputError['password'] && 
                inputError['password'].map(function(item) {
                return (
                  <div className="alert alert-danger">{item}</div>
                )
              })
            }
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="form-group text-center">
              <button type="submit" 
              className="login-btn" 
              > 
              Registrar 
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

const mapStateToProps = state => ({
  item: state.item
});
export default connect(mapStateToProps, { signup })(RegisterBox);