import { Controller, useForm } from "react-hook-form";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
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
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { RiProfileLine } from "react-icons/ri";

interface ContactFormInput {
  headline: string;
  yearsOfXp: number;
  aboutMe: string;
}

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    defaultValues: {
      headline: "",
      yearsOfXp: 1,
      aboutMe: "",
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
      <h1>
        <RiProfileLine />
        Profile
      </h1>
      <Controller
        name="headline"
        control={control}
        rules={{
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="headline">Nom de poste</FormLabel>
            <Input
              id="headline"
              placeholder="Votre intitulé de poste"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="yearsOfXp"
        control={control}
        rules={{
          required: "This is required",
        }}
        render={({ field }) => (
          <FormControl isInvalid={!!errors?.yearsOfXp}>
            <FormLabel htmlFor="yearsOfXp">Année Expérience</FormLabel>
            <NumberInput {...field} min={0} max={50} id="yearsOfXp">
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Slider
              flex="1"
              min={0}
              max={50}
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
              {errors.yearsOfXp && errors.yearsOfXp.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />
      <Controller
        name="aboutMe"
        control={control}
        rules={{
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="aboutMe">A propos de moi</FormLabel>
            <Textarea
              id="aboutMeheadline"
              placeholder="Quelques mots sur vous"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}
