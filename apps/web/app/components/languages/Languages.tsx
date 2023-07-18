import {
  Box,
  Button,
  Divider,
  List,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FC, useReducer, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineLanguage } from "react-icons/md";
import { SectionHeader } from "ui";
import LanguageItem from "./LanguageItem";
import languagesReducer, { initialLanguagesState } from "./languages.reducer";
import LanguagesModal from "./LanguagesModal";

const Languages: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedLanguage, setSelectedLanguage] = useState<any>(null);
  const [languagesState, dispatch] = useReducer(
    languagesReducer,
    initialLanguagesState
  );

  const languageItem = languagesState.languages.map((language: any) => (
    <LanguageItem
      key={language.id}
      id={language.id}
      name={language.name}
      level={language.level}
      onEdit={() => {
        setSelectedLanguage(language);
        onOpen();
      }}
      onDelete={() => dispatch({ type: "remove", id: language.id })}
    />
  ));

  return (
    <Box mb="4" pos="relative" id="language">
      <SectionHeader>
        <MdOutlineLanguage />
        <Text as="span" ml="3">
          Languages
        </Text>
      </SectionHeader>
      <List className="language">{languageItem}</List>
      <Button
        onClick={() => {
          onOpen();
        }}
        leftIcon={<IoAddOutline />}
        variant="outline"
        mb="4"
      >
        <Text as="span" ml="1">
          Ajout Langue
        </Text>
      </Button>
      <LanguagesModal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setSelectedLanguage(null);
        }}
        language={selectedLanguage}
        onSave={(language) => {
          if (language.id) {
            dispatch({ type: "edit", ...language });
          } else {
            dispatch({ type: "add", ...language });
          }
          setSelectedLanguage(null);
        }}
      />
      <Divider orientation="horizontal" borderColor="gray.400" />
    </Box>
  );
};

export default Languages;
