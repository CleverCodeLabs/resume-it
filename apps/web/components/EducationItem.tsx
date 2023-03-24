import React, { Component } from "react";

type EducationItemProps = {
  name: string;
  nameInstitution: string;
  year: number;
};

export default class EducationItem extends Component<EducationItemProps> {
  render() {
    const { name, nameInstitution, year } = this.props;
    return (
      <li className="education">
        <p>{name}</p>
        <p>{nameInstitution}</p>
        <p>{year}</p>
      </li>
    );
  }
}
