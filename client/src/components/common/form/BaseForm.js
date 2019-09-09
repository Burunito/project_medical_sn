import React, { Component } from 'react';
import InputText from '../input/Text';
import InputTextarea from '../input/Textarea';
import InputNumber from '../input/Number';
import InputDate from '../input/Date';
import InputCombo from '../input/Combo';
import InputFile from '../input/File';


class BaseForm extends React.Component {
  constructor(props) {
    super(props);

    let stateObj = {};
    for(let prop of props) {
      stateObj[this.target.name] = this.target.value;
    }

    this.state = { 
      stateObj,
      errors: [] 
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      var stateObject = function() {
        let returnObj = {};
        returnObj[this.target.name] = this.target.value;
           return returnObj;
      }.bind(event)();

      this.setState( stateObject );    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.inputs.map(input => 
          {
            this.inputs.length > 0 &&
            {
              input
            }
          }
        )}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default BaseForm;
