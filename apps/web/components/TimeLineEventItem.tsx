import React, { Component } from "react";

type TimeLineItemProps = {
  year: number;
  headLine: string;
  companyName: string;
};

export default class TimeLineEventItem extends Component<TimeLineItemProps> {
  render() {
    const { year, headLine, companyName } = this.props;

    return (
      <li className="timeLineEvent">
        <p>{year}</p>
        <p>{headLine}</p>
        <p>{companyName}</p>
      </li>
    );
  }
}
