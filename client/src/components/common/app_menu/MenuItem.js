import React from 'react';

export default class MenuItem extends React.Component {
    navigate(hash) {
        window.location.hash = hash;
    }

    render() {
        return (
            <div className="menu-item" onClick={this.navigate.bind(this, this.props.hash)}>{this.props.children}</div>
        );
    }
}