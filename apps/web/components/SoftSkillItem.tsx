import React, { Component } from "react";

type SoftSkillProps = {
  nameProfile: string;
  value: number;
};

export default class SoftSkillItem extends Component<SoftSkillProps> {
  render() {
    const { nameProfile, value } = this.props;
    return (
      <li className="softSkill">
        <p>{nameProfile}</p>
        <p>{value}</p>
      </li>
    );
  }
}
