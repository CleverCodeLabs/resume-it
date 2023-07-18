import React from "react";
import { Language } from "./resume";
import LanguageItem from "./LanguageItem";
import { UnorderedList } from "@chakra-ui/react";

type LanguagesProps = {
  languages: Language[];
};

function LanguagesList(props: LanguagesProps) {
  const { languages } = props;
  const listItems = languages.map((language) => (
    <LanguageItem
      key={language.name}
      name={language.name}
      level={language.level}
    />
  ));
  return (
    <UnorderedList listStyleType="none" ml="0" mt="2">
      {listItems}
    </UnorderedList>
  );
}

export default LanguagesList;
