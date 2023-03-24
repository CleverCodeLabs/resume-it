import React, { Component } from "react";

type HobbyItemProps = {
  name: string;
};

export default class HobbyItem extends Component<HobbyItemProps> {
  render() {
    const { name } = this.props;
    return (
      <li className="hobby">
        <p>{name}</p>
      </li>
    );
  }
}
