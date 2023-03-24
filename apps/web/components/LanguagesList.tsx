import React from "react";
import { Language } from "./resume";
import LanguageItem from "./LanguageItem";

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
  return <ul>{listItems}</ul>;
}

export default LanguagesList;
