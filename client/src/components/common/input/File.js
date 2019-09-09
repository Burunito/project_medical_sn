import React, { Component } from 'react';

class InputNumber extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="input-number">
        <label>
        {this.props.label}
          <input
            type='number'
            placeholder={this.props.placeholder}
            onClick={this.props.clickCallback}
            onChange={this.props.changeCallback}
            value={this.props.default}>
          </input>
        </label>
      </div>
    )
  }
}

export default InputNumber;
