import React, { Component } from "react";
import DescriptionTechnicalEnvironmentList from "./DescriptionTechnicalEnvironmentList";

type TechnicalEnvironmentItemProps = {
  name: string;
  description: string[];
};

export default class TechnicalEnvironmentItem extends Component<TechnicalEnvironmentItemProps> {
  render() {
    const { name, description } = this.props;
    return (
      <li className="technicalEnvironment">
        <p>{name}</p>
        <DescriptionTechnicalEnvironmentList description={description} />
      </li>
    );
  }
}
