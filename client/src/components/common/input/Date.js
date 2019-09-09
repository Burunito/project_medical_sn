import React, { Component } from 'react';

class InputDate extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="form-control input-date">
        <label>
        {this.props.label}
        </label>
          <input
            className='date'
            type='date'
            placeholder={this.props.placeholder}
            onClick={this.props.clickCallback}
            onChange={this.props.changeCallback}
            value={this.props.default}>
          </input>
      </div>
    )
  }
}

export default InputDate;
