import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class InputText extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleValueChange(){
    var value = this.input.value;
    this.props.onChangeValue(value);
  }

  render() {
    let inputError = this.props.errors ? this.props.errors : null;
    return (
      <div className="form-group">
        <label>
        {this.props.label}
        </label>
          <input
            ref={this.input}
            className={"form-control " + (this.props.className ? this.props.class : '')}
            type='text'
            name={this.props.name ? this.props.name : ''}
            placeholder={this.props.placeholder ? this.props.placeholder : ''}
            onClick={this.props.clickCallback ? this.props.clickCallback : undefined}
            onChange={this.props.changeCallback ? this.props.changeCallback : undefined}
            value={this.props.default}
          />
      </div>
    )
  }
}

export default InputText;
