import { Controller, useForm } from "react-hook-form";

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { GiSkills } from "react-icons/gi";
import { IoAddOutline } from "react-icons/io5";

interface SkillsFormInput {
  name: string;
  level: number;
}

export default function SkillsForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SkillsFormInput>({
    defaultValues: {
      name: "",
      level: 1,
    },
  });

  function onSubmit(values: any): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <Box mb="4" pos="relative" id="skills">
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Controller
          name="name"
          control={control}
          rules={{
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          }}
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
            <FormControl isInvalid={fieldState.invalid} mb="4">
              <FormLabel htmlFor="name" mt="4">
                Nom de compétence
              </FormLabel>
              <Input
                id="name"
                placeholder="Votre compétence"
                {...{ onChange, onBlur, value, ref }}
              />
              <FormErrorMessage>
                {fieldState.error && fieldState.error.message}
              </FormErrorMessage>
            </FormControl>
          )}
        />

        <Controller
          name="level"
          control={control}
          rules={{
            required: "This is required",
          }}
          render={({ field }) => (
            <FormControl isInvalid={!!errors?.level} mb="4">
              <FormLabel htmlFor="level">Niveau de la compétence</FormLabel>
              <HStack spacing="8">
                <NumberInput {...field} min={0} max={5} id="level" w="32">
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Slider
                  flex="1"
                  min={0}
                  max={5}
                  step={1}
                  focusThumbOnChange={false}
                  w="32"
                  {...field}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb fontSize="sm" boxSize="32px">
                    {field.value}
                  </SliderThumb>
                </Slider>
              </HStack>
              <FormErrorMessage>
                {errors.level && errors.level.message}
              </FormErrorMessage>
            </FormControl>
          )}
        />
        <Button
          leftIcon={<IoAddOutline />}
          colorScheme="teal"
          variant="outline"
          mb="4"
        >
          <Text as="span">Ajout Compétence</Text>
        </Button>
      </form>
      <Divider orientation="horizontal" borderColor="gray.400" />
    </Box>
  );
}
