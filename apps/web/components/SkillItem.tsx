import React, { Component } from "react";

type SkillItemProps = {
  name: string;
  level: number;
};

export default class SkillItem extends Component<SkillItemProps> {
  render() {
    const { name, level } = this.props;
    return (
      <li className="skill">
        <p>{name}</p>
        <p>{level}</p>
      </li>
    );
  }
}
