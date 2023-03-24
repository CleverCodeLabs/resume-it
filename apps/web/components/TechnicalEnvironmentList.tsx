import React from "react";
import { TechnicalEnvironment } from "./resume";
import TechnicalEnvironmentItem from "./TechnicalEnvironmentItem";

type TechnicalEnvironmentProps = {
  technicalEnvironment: TechnicalEnvironment[];
};

function TechnicalEnvironmentList(props: TechnicalEnvironmentProps) {
  const { technicalEnvironment } = props;
  const listItems = technicalEnvironment.map(
    (technicalEnvironmentCategorie) => (
      <TechnicalEnvironmentItem
        key={technicalEnvironmentCategorie.name}
        name={technicalEnvironmentCategorie.name}
        description={technicalEnvironmentCategorie.description}
      />
    )
  );
  return <ul>{listItems}</ul>;
}

export default TechnicalEnvironmentList;
