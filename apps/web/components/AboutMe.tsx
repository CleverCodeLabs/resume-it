import React, { Component } from "react";

type AboutMeProps = {
  aboutMe: String;
};

export default class AboutMe extends Component<AboutMeProps> {
  render() {
    const { aboutMe } = this.props;
    return (
      <div className="aboutMe">
        <p>{aboutMe}</p>
      </div>
    );
  }
}
