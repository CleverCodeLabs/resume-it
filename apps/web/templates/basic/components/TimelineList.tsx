import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import { TimeLineEvent } from "./resume";
import TimeLineEventItem from "./TimeLineEventItem";

type TimelineProps = {
  timeline: TimeLineEvent[];
};

function TimelineList(props: TimelineProps) {
  const { timeline } = props;
  const listItems = timeline.map((timeLineEvent, index) => (
    <TimeLineEventItem
      key={index}
      year={timeLineEvent.year}
      headLine={timeLineEvent.headLine}
      companyName={timeLineEvent.companyName}
    />
  ));
  return (
    <Box ml="4" pos="relative">
      {!!timeline.length && (
        <Box
          borderTop="4px"
          borderRight="4px"
          borderBottom="4px"
          borderColor="gray.300"
          borderRightRadius="10"
          pos="absolute"
          height="115px"
          width="90%"
          top="9"
          left="4"
        ></Box>
      )}
      <Grid autoFlow="dense" templateColumns="repeat(4, 1fr)" gap={6}>
        {listItems}
      </Grid>
    </Box>
  );
}

export default TimelineList;
