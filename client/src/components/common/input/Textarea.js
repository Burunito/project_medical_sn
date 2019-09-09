import React, { Component } from 'react';

class InputTextarea extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="form-control">
    		<label>
    		{this.props.label}
	        <textarea
	          onClick={this.props.clickCallback}
	          onChange={this.props.changeCallback}
	          >
            {this.props.default}
	        </textarea>
        </label>
      </div>
    )
  }
}

export default InputTextarea;
