import React, { Component } from 'react';
import UserMenu from './user_menu/UserMenu';
import AppMenu from './app_menu/AppMenu';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Container
} from 'reactstrap';

class AppNavBar extends Component {
  state = {
  	isOpen: false
  }

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div>
			  <Navbar color="dark" dark exppand="mb-5">
			    <Container>
			    	<AppMenu/>
			      <NavbarBrand href="/">Medical</NavbarBrand>
			      <UserMenu/>
			    </Container>
			  </Navbar>
			</div>
		);
	}
}

export default AppNavBar;
