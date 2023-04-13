import { Controller, useForm } from "react-hook-form";

import {
  Box,
  Divider,
  FormControl,
  Heading,
  HStack,
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
  TagLeftIcon,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useReducer } from "react";
import { GiSkills } from "react-icons/gi";
import { BsStar, BsStarFill } from "react-icons/bs";

interface SkillInput {
  name: string;
}

interface SkillsState {
  counter: number;
  skills: {
    id?: number;
    name: string;
    favorites: boolean;
  }[];
}

const initialSkillsState: SkillsState = {
  counter: 0,
  skills: [],
};
const reducer = (state: SkillsState, action: any) => {
  switch (action.type) {
    case "add":
      const newCounter = state.counter + 1;
      return {
        counter: newCounter,
        skills: [
          ...state.skills,
          {
            id: newCounter,
            name: action.name,
            favorites: false,
          },
        ],
      };
    case "remove":
      return {
        counter: state.counter,
        skills: state.skills.filter((s) => s.id !== action.id),
      };
    case "favorites":
      const { id, favorites } = action;
      const skill = state.skills.find((s) => s.id === id);
      if (skill) {
        skill.favorites = favorites;
      }
      return {
        counter: state.counter,
        skills: state.skills,
      };
    default:
      return state;
  }
};

export default function Skills() {
  const [skillState, dispatch] = useReducer(reducer, initialSkillsState);
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

  async function onSubmit(skill: any): Promise<void> {
    dispatch({ type: "add", ...skill });
    reset();
  }

  return (
    <Box mb="4" pos="relative" id="skills">
      <Heading
        as="h2"
        size="lg"
        top="0"
        p="4"
        mx="-4"
        pos="sticky"
        bgColor="gray.50"
        zIndex="sticky"
        boxShadow="sm"
        display="flex"
        alignItems="center"
      >
        <GiSkills />
        <Text as="span" ml="3">
          Compétences
        </Text>
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          mt="2"
          mb="2"
          p={2}
        >
          {!!skillState.skills.length && (
            <HStack spacing={2} rowGap={2} wrap="wrap" mb={2}>
              {skillState.skills.map((skill) => (
                // eslint-disable-next-line react/jsx-key
                <Tooltip label="Indique que cette compétence est une compétence clé. Permet d'afficher la compétence sur la 1ere page">
                  <Tag
                    size="lg"
                    key={skill.id}
                    borderRadius="full"
                    variant="solid"
                    colorScheme="green"
                  >
                    <TagLeftIcon
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        dispatch({
                          type: "favorites",
                          ...skill,
                          favorites: !skill.favorites,
                        });
                      }}
                      as={skill.favorites ? BsStarFill : BsStar}
                    />

                    <TagLabel>{skill.name}</TagLabel>
                    <TagCloseButton
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        dispatch({ type: "remove", ...skill });
                      }}
                    />
                  </Tag>
                </Tooltip>
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
