import {
  Box,
  Button,
  Divider,
  List,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineLanguage } from "react-icons/md";
import { SectionHeader } from "ui";
import LanguageItem from "./LanguageItem";
import { useLanguages, useLanguagesDispatch } from "./LanguagesContext";
import LanguagesModal from "./LanguagesModal";

const Languages: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedLanguage, setSelectedLanguage] = useState<{
    index?: number;
    name: string;
    level: string;
  } | null>(null);
  const languages = useLanguages();
  const dispatch = useLanguagesDispatch();

  const languagesItems = languages.map((language, index) => (
    <LanguageItem
      key={index}
      name={language.name}
      level={language.level}
      onEdit={() => {
        setSelectedLanguage({ index, ...language });
        onOpen();
      }}
      onDelete={() => dispatch({ type: "remove", index })}
    />
  ));

  return (
    <Box mb="4" pos="relative">
      <SectionHeader>
        <MdOutlineLanguage />
        <Text as="span" ml="3">
          Languages
        </Text>
      </SectionHeader>
      <List>{languagesItems}</List>
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
          console.log(language);
          const { index, name, level } = language;
          if (index !== undefined) {
            dispatch({
              type: "edit",
              data: { name, level },
              index,
            });
          } else {
            dispatch({ type: "add", data: language });
          }
        }}
      />

      <Divider orientation="horizontal" borderColor="gray.400" />
    </Box>
  );
};

export default Languages;
