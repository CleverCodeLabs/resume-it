import { Controller, useForm } from "react-hook-form";

import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RxHobbyKnife } from "react-icons/rx";
import { IoAddOutline } from "react-icons/io5";

interface HobbiesFormInput {
  name: string;
}

export default function HobbiesForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<HobbiesFormInput>({
    defaultValues: {
      name: "",
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
          <RxHobbyKnife />
          <Text as="span" ml="3">
            Loisir
          </Text>
        </Heading>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "This is required",
            minLength: { value: 2, message: "Minimum length should be 2" },
          }}
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
            <FormControl isInvalid={fieldState.invalid} mb="4">
              <FormLabel htmlFor="name" mt="4">
                Nom du Loisir
              </FormLabel>
              <Input
                id="name"
                placeholder="Votre nom de loisir"
                {...{ onChange, onBlur, value, ref }}
              />
              <FormErrorMessage>
                {fieldState.error && fieldState.error.message}
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
          <Text as="span">Ajout Loisir</Text>
        </Button>
      </form>
      <Divider orientation="horizontal" borderColor="gray.400" />
    </Box>
  );
}
