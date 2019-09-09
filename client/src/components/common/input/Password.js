import React, { Component } from 'react';

class InputNumber extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="form-group">
        <label>
        {this.props.label}
        </label>
          <input
            className={"form-control " + (this.props.className ? this.props.class : '')}
            type='password'
            name={this.props.name ? this.props.name : ''}
            placeholder={this.props.placeholder ? this.props.placeholder : ''}
            onClick={this.props.clickCallback ? this.props.clickCallback : undefined}
            onChange={this.props.changeCallback ? this.props.changeCallback : undefined}
            value={this.props.default}>
          </input>
      </div>
    )
  }
}

export default InputNumber;
