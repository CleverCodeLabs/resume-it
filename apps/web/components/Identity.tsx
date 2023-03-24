import React, { Component } from "react";

type IdentityProps = {
  name: string;
  headline: string;
  yearsOfExperience: number;
};

export default class Identity extends Component<IdentityProps> {
  render() {
    const { name, headline, yearsOfExperience } = this.props;
    return (
      <div className="identity">
        <img />
        <p>{name}</p>
        <p>{headline}</p>
        <p>{yearsOfExperience}</p>
      </div>
    );
  }
}
