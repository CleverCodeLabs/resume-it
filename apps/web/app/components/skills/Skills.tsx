import {
  Box,
  Divider,
  FormControl,
  HStack,
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { BsStar, BsStarFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { SectionHeader } from "ui";
import { useSkills, useSkillsDispatch } from "./SkillsContext";

interface SkillInput {
  name: string;
}

export default function Skills() {
  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { isSubmitting },
  } = useForm<SkillInput>({
    mode: "onBlur",
    defaultValues: {
      name: "",
    },
  });

  const skills = useSkills();
  const dispatch = useSkillsDispatch();

  async function onSubmit(skill: SkillInput): Promise<void> {
    dispatch({ type: "add", data: { ...skill, favorites: false } });
    reset();
  }

  return (
    <Box mb="4" pos="relative" id="skills">
      <SectionHeader>
        <GiSkills />
        <Text as="span" ml="3">
          Compétences
        </Text>
      </SectionHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          mt="2"
          mb="2"
          p={2}
        >
          {!!skills.length && (
            <HStack spacing={2} rowGap={2} wrap="wrap" mb={2}>
              {skills.map((skill) => (
                // <Tooltip label="Indique que cette compétence est une compétence clé. Permet d'afficher la compétence sur la 1ere page">
                <Tag
                  size="lg"
                  key={skill.name}
                  borderRadius="full"
                  variant="solid"
                  colorScheme="blackAlpha"
                >
                  <TagLeftIcon
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      dispatch({
                        type: "favorites",
                        data: {
                          ...skill,
                          favorites: !skill.favorites,
                        },
                      });
                    }}
                    as={skill.favorites ? BsStarFill : BsStar}
                  />

                  <TagLabel>{skill.name}</TagLabel>
                  <TagCloseButton
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      dispatch({
                        type: "remove",
                        data: {
                          ...skill,
                        },
                      });
                    }}
                  />
                </Tag>
                // </Tooltip>
              ))}
            </HStack>
          )}
          <Controller
            name="name"
            control={control}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <FormControl>
                <Input
                  border="none"
                  id="name"
                  placeholder="Votre compétence"
                  _focusVisible={{
                    border: "none",
                    outline: "none",
                  }}
                  {...{ onChange, onBlur, value, ref }}
                />
              </FormControl>
            )}
          />
        </Box>
      </form>
      <Divider orientation="horizontal" borderColor="gray.400" />
    </Box>
  );
}
