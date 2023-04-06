import React, { Component } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
type AboutMeProps = {
  aboutMe: String;
};

export default class AboutMe extends Component<AboutMeProps> {
  render() {
    const { aboutMe } = this.props;
    return (
      <Wrap className="aboutMe">
        <WrapItem>
          <p>{aboutMe}</p>
        </WrapItem>
      </Wrap>
    );
  }
}
