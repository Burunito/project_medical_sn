import React, { Component } from "react";
import { render } from "react-dom";
import CheeseburgerMenu from "cheeseburger-menu";
import HamburgerMenu from "react-hamburger-menu";
import MenuContent from "./MenuContent";

const contentStyles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class AppMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false
    };
  }

  openMenu() {
    this.setState({ menuOpen: true });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <div>
        <CheeseburgerMenu
          isOpen={this.state.menuOpen}
          closeCallback={this.closeMenu.bind(this)}
        >
          <MenuContent closeCallback={this.closeMenu.bind(this)} />
        </CheeseburgerMenu>

        <HamburgerMenu
          isOpen={this.state.menuOpen}
          menuClicked={this.openMenu.bind(this)}
          right={true}
          width={32}
          height={24}
          strokeWidth={3}
          rotate={0}
          color="black"
          borderRadius={0}
          animationDuration={0.5}
        />
      </div>
    );
  }
}

export default AppMenu;