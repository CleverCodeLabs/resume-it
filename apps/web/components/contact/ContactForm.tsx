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
} from "@chakra-ui/react";
import React from "react";
import { RiContactsLine } from "react-icons/ri";

interface ContactFormInput {
  name: string;
  headline: string;
  yearsOfXp: number;
  phoneNumber: string;
  address: string;
  zipCode: string;
  city: string;
  emailAddress: string;
}

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    defaultValues: {
      name: "",
      headline: "",
      yearsOfXp: 1,
      phoneNumber: "",
      address: "",
      zipCode: "",
      city: "",
      emailAddress: "",
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
        <RiContactsLine />
        Contact
      </h1>
      <Controller
        name="name"
        control={control}
        rules={{
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="name">Nom Prénom</FormLabel>
            <Input
              id="name"
              placeholder="Votre Nom et Prénom"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />
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
        name="phoneNumber"
        control={control}
        rules={{
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
          pattern: {
            value: /(06|07)[0-9]{8}/,
            message: "entrez un numéro de téléphone",
          },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="phoneNumber">Numéro téléphone</FormLabel>
            <Input
              id="phoneNumber"
              placeholder="Votre numéro de téléphone"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {errors.phoneNumber && errors.phoneNumber.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="emailAddress"
        control={control}
        rules={{
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="emailAddress">Adresse Email</FormLabel>
            <Input
              id="emailAddress"
              placeholder="Votre adresse Email"
              type="email"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="address"
        control={control}
        rules={{
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="address">Adresse</FormLabel>
            <Input
              id="address"
              placeholder="Votre adresse"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="zipCode"
        control={control}
        rules={{
          pattern: {
            value: /[0-9]{5}/,
            message: "entrez votre code postal",
          },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="zipCode">CP</FormLabel>
            <Input
              id="zipCode"
              placeholder="Votre Code Postal"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="city"
        control={control}
        rules={{
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="city">Ville</FormLabel>
            <Input
              id="city"
              placeholder="Le nom de votre ville"
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
