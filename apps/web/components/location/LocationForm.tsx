import { Controller, useForm } from "react-hook-form";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { GrMapLocation } from "react-icons/gr";

interface ContactFormInput {
  address: string;
  zipCode: string;
  city: string;
  region: string;
  country: string;
}

export default function ContactForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInput>({
    defaultValues: {
      address: "",
      zipCode: "",
      city: "",
      region: "",
      country: "",
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
        <GrMapLocation />
        Location
      </h1>

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

      <Controller
        name="region"
        control={control}
        rules={{
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="region">Région</FormLabel>
            <Input
              id="region"
              placeholder="Le nom de votre région"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="country"
        control={control}
        rules={{
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="country">Pays</FormLabel>
            <Input
              id="country"
              placeholder="Le nom de votre Pays"
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
