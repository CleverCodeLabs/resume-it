import { Controller, useForm } from "react-hook-form";

import {
  Box,
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
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { RiProfileLine } from "react-icons/ri";

interface ProfileFormInput {
  headline: string;
  yearsOfXp: number;
  aboutMe: string;
}

export default function ProfileForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormInput>({
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
    <Box mb="4" pos="relative">
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
          <RiProfileLine />
          <Text as="span" ml="3">
            {" "}
            Profil
          </Text>
        </Heading>
        <Controller
          name="headline"
          control={control}
          rules={{
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          }}
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
            <FormControl isInvalid={fieldState.invalid} mb="4">
              <FormLabel htmlFor="headline" mt="4">
                Nom de poste
              </FormLabel>
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
            <FormControl isInvalid={!!errors?.yearsOfXp} mb="4">
              <FormLabel htmlFor="yearsOfXp">Année Expérience</FormLabel>
              <HStack spacing="8">
                <NumberInput {...field} min={0} max={50} id="yearsOfXp" w="32">
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
            <FormControl isInvalid={fieldState.invalid} mb="4">
              <FormLabel htmlFor="aboutMe">A propos de moi</FormLabel>
              <Textarea
                id="aboutMe"
                placeholder="Quelques mots sur vous"
                {...{ onChange, onBlur, value, ref }}
              />
              <FormErrorMessage>
                {fieldState.error && fieldState.error.message}
              </FormErrorMessage>
            </FormControl>
          )}
        />
        <Divider orientation="horizontal" borderColor="gray.400" />
      </form>
    </Box>
  );
}
