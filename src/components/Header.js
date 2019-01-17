import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <header className="top">
          <h1>
            Catch
            <span className="ofThe">
              <span className="of">Of</span>
              <span className="the">The</span>
            </span>
            Day
          </h1>
          <h3 className="tagline">
            <span>{this.props.tagline}</span>
          </h3>
        </header>
      </div>
    );
  }
}

export default Header;
