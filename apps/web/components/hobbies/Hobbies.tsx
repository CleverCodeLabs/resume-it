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
  Text,
} from "@chakra-ui/react";
import React, { useReducer } from "react";
import { RxHobbyKnife } from "react-icons/rx";

interface HobbyInput {
  name: string;
}

interface HobbiesState {
  counter: number;
  hobbies: {
    id?: number;
    name: string;
  }[];
}

const initialHobbiesState: HobbiesState = {
  counter: 0,
  hobbies: [],
};
const reducer = (state: HobbiesState, action: any) => {
  switch (action.type) {
    case "add":
      const newCounter = state.counter + 1;
      return {
        counter: newCounter,
        hobbies: [
          ...state.hobbies,
          {
            id: newCounter,
            name: action.name,
          },
        ],
      };
    case "remove":
      return {
        counter: state.counter,
        hobbies: state.hobbies.filter((h) => h.id !== action.id),
      };
    default:
      return state;
  }
};

export default function Hobbies() {
  const [hobbyState, dispatch] = useReducer(reducer, initialHobbiesState);
  const {
    control,
    handleSubmit,
    getValues,
    reset,
    formState: { isSubmitting },
  } = useForm<HobbyInput>({
    mode: "onBlur",
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(hobby: any): Promise<void> {
    dispatch({ type: "add", ...hobby });
    reset();
  }

  return (
    <Box mb="4" pos="relative" id="hobbies">
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
        <RxHobbyKnife />
        <Text as="span" ml="3">
          Loisir
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
          {!!hobbyState.hobbies.length && (
            <HStack spacing={2} rowGap={2} wrap="wrap" mb={2}>
              {hobbyState.hobbies.map((hobby) => (
                <Tag
                  size="lg"
                  key={hobby.id}
                  borderRadius="full"
                  variant="solid"
                  colorScheme="green"
                >
                  <TagLabel>{hobby.name}</TagLabel>
                  <TagCloseButton
                    onClick={() => dispatch({ type: "remove", ...hobby })}
                  />
                </Tag>
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
                  placeholder="Votre nom de loisir"
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
