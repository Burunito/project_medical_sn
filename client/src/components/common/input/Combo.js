import React, { Component } from 'react';

class InputCombo extends Component {
  constructor(props) {
    super(props);
    this.items = [];
  }

  render() {
    return (
      <div className="form-control">
        <label>
        {this.props.label}
        </label>
        <select>
          <option value="">Seleccione</option>
        </select>
      </div>
    )
  }
}

export default InputCombo;
