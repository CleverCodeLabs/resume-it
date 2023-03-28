import { Controller, useForm } from "react-hook-form";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { RiContactsLine } from "react-icons/ri";

interface ContactFormInput {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  dateOfBirth: number;
}

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      dateOfBirth: 1,
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
        name="fullName"
        control={control}
        rules={{
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="fullName">Nom Prénom</FormLabel>
            <Input
              id="fullName"
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
        name="dateOfBirth"
        control={control}
        rules={{
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="dateOfBirth">Date de naissance</FormLabel>
            <Input
              id="dateOfBirth"
              placeholder="Votre date de naissance"
              type="date"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />
      <p>Photo</p>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}
