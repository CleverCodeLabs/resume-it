import { Grid, ListItem, Text } from "@chakra-ui/react";
import React, { Component } from "react";

type LanguageItemProps = {
  name: string;
  level: string;
};

export default class LanguageItem extends Component<LanguageItemProps> {
  render() {
    const { name, level } = this.props;
    return (
      <ListItem className="language">
        <Grid templateColumns="repeat(2, 1fr)" gap={6}>
          <Text color="black" fontSize={14} fontWeight="bold">
            {name}
          </Text>
          <Text color="purple.600" fontWeight="bold" fontSize={14}>
            {level}
          </Text>
        </Grid>
      </ListItem>
    );
  }
}
