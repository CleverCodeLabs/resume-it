import { Controller, useForm } from "react-hook-form";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2" size="xl">
        <RxHobbyKnife />
        Hobbies
      </Heading>
      <Controller
        name="name"
        control={control}
        rules={{
          required: "This is required",
          minLength: { value: 2, message: "Minimum length should be 2" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="name">Nom du Loisir</FormLabel>
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

      <Button leftIcon={<IoAddOutline />} colorScheme="teal" variant="outline">
        Nouveau loisir
      </Button>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}
