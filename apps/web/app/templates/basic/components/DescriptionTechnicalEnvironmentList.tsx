import React from "react";

type DescriptionTechnicalEnvironmentProps = {
  description: string[];
};

function DescriptionTechnicalEnvironmentList(
  props: DescriptionTechnicalEnvironmentProps
) {
  const { description } = props;
  const listItems = description.map((description) => (
    <li key={description}>{description}</li>
  ));
  return <ul>{listItems}</ul>;
}

export default DescriptionTechnicalEnvironmentList;
