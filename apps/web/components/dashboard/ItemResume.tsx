import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import React, { Component } from "react";

type ItemResumeProps = {
  headline: string;
  yearsOfExperience: number;
};

export default class ItemResume extends Component<ItemResumeProps> {
  render() {
    const { headline, yearsOfExperience } = this.props;
    return (
      <Card>
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">{headline}</Heading>
            <Text fontSize={14}>{yearsOfExperience} ans d'expérience</Text>
          </Stack>
        </CardBody>
      </Card>
    );
  }
}
