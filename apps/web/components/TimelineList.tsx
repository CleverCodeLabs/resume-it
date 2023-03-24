import React from "react";
import { TimeLineEvent } from "./resume";
import TimeLineEventItem from "./TimeLineEventItem";

type TimelineProps = {
  timeline: TimeLineEvent[];
};

function TimelineList(props: TimelineProps) {
  const { timeline } = props;
  const listItems = timeline.map((timeLineEvent) => (
    <TimeLineEventItem
      key={timeLineEvent.year}
      year={timeLineEvent.year}
      headLine={timeLineEvent.headLine}
      companyName={timeLineEvent.companyName}
    />
  ));
  return <ul>{listItems}</ul>;
}

export default TimelineList;
