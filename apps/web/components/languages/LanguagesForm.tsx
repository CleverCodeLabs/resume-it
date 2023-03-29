import { Controller, useForm } from "react-hook-form";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
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
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineLanguage } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";

interface LanguagesFormInput {
  name: string;
  level: number;
}

export default function LanguagesForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LanguagesFormInput>({
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2" size="xl">
        <MdOutlineLanguage />
        Languages
      </Heading>
      <Controller
        name="name"
        control={control}
        rules={{
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="name">Nom de la Langue</FormLabel>
            <Input
              id="name"
              placeholder="Votre nom de langue"
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
          <FormControl isInvalid={!!errors?.level}>
            <FormLabel htmlFor="level">Niveau de la Langue</FormLabel>
            <NumberInput {...field} min={0} max={5} id="level">
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
              {...field}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb fontSize="sm" boxSize="32px">
                {field.value}
              </SliderThumb>
            </Slider>
            <FormErrorMessage>
              {errors.level && errors.level.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Button leftIcon={<IoAddOutline />} colorScheme="teal" variant="outline">
        Nouvelle Langue
      </Button>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}
