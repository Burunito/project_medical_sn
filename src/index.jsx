import React, { Component } from 'react';
import { render } from 'react-dom';

class Prueba extends React.Component{
	render(){
    return(
    	<h1> Hola Mundo</h1>
    	)
	}
}

render(
	<Prueba/>
	, document.getElementById('app')
);