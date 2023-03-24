import React, { Component } from "react";

type LanguageItemProps = {
  name: string;
  level: number;
};

export default class LanguageItem extends Component<LanguageItemProps> {
  render() {
    const { name, level } = this.props;
    return (
      <li className="language">
        <p>{name}</p>
        <p>{level}</p>
      </li>
    );
  }
}
