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
  Text,
} from "@chakra-ui/react";
import React from "react";
import { GrMapLocation } from "react-icons/gr";

interface LocationFormInput {
  address: string;
  zipCode: string;
  city: string;
  region: string;
  country: string;
}

export default function LocationForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LocationFormInput>({
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
          <GrMapLocation />
          <Text as="span" ml="3">
            Adresse
          </Text>
        </Heading>

        <Controller
          name="address"
          control={control}
          rules={{
            minLength: { value: 4, message: "Minimum length should be 4" },
          }}
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
            <FormControl isInvalid={fieldState.invalid} mb="4">
              <FormLabel htmlFor="address" mt="4">
                Adresse
              </FormLabel>
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

        <HStack spacing="4" mb="4">
          <Controller
            name="zipCode"
            control={control}
            rules={{
              pattern: {
                value: /[0-9]{5}/,
                message: "entrez votre code postal",
              },
            }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
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
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <FormControl isInvalid={fieldState.invalid}>
                <FormLabel htmlFor="city">Ville</FormLabel>
                <Input
                  id="city"
                  placeholder="Votre ville"
                  {...{ onChange, onBlur, value, ref }}
                />
                <FormErrorMessage>
                  {fieldState.error && fieldState.error.message}
                </FormErrorMessage>
              </FormControl>
            )}
          />
        </HStack>

        <HStack spacing="4" mb="4">
          <Controller
            name="region"
            control={control}
            rules={{
              minLength: { value: 4, message: "Minimum length should be 4" },
            }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <FormControl isInvalid={fieldState.invalid}>
                <FormLabel htmlFor="region">Région</FormLabel>
                <Input
                  id="region"
                  placeholder="Votre région"
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
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <FormControl isInvalid={fieldState.invalid}>
                <FormLabel htmlFor="country">Pays</FormLabel>
                <Input
                  id="country"
                  placeholder="Votre Pays"
                  {...{ onChange, onBlur, value, ref }}
                />
                <FormErrorMessage>
                  {fieldState.error && fieldState.error.message}
                </FormErrorMessage>
              </FormControl>
            )}
          />
        </HStack>
      </form>
      <Divider orientation="horizontal" borderColor="gray.400" />
    </Box>
  );
}
