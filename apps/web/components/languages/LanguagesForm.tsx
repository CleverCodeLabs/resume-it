import {
  Control,
  Controller,
  useFieldArray,
  useForm,
  useWatch,
} from "react-hook-form";

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
  Select,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdOutlineLanguage } from "react-icons/md";
import { IoAddOutline } from "react-icons/io5";
import { FieldArrayWithId } from "react-hook-form/dist/types/fieldArray";

interface LanguagesFormInput {
  languages:
    | {
        name?: string | undefined;
        level?: string | undefined;
      }[]
    | undefined;
}

const LanguageInput = ({
  control,
  index,
  field,
}: {
  control: Control<LanguagesFormInput>;
  index: number;
  field: FieldArrayWithId<LanguagesFormInput, "languages", "id">;
}) => {
  const value = useWatch({
    name: "languages",
    control,
  });
  return (
    <HStack>
      <Controller
        name={`languages.${index}.name`}
        control={control}
        rules={{
          required: "This is required",
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid} mb="4">
            <FormLabel htmlFor="name" mt="4">
              Nom de la Langue
            </FormLabel>
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
        name={`languages.${index}.level`}
        control={control}
        rules={{
          required: "This is required",
        }}
        render={({ field, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid} mb="4">
            <FormLabel htmlFor="level">Niveau de la Langue</FormLabel>
            <Select placeholder="Sélectionner votre niveau" {...field}>
              <option value="debutant">Débutant</option>
              <option value="intermediaire">Intermédiaire</option>
              <option value="courant">Courant</option>
              <option value="bilingue">Bilingue</option>
              <option value="maternelle">Maternelle</option>
            </Select>
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />
    </HStack>
  );
};

export default function LanguagesForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LanguagesFormInput>({
    defaultValues: {
      languages: [],
    },
  });

  const { fields, append } = useFieldArray({
    name: "languages",
    control,
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
      <form
        onSubmit={handleSubmit(onSubmit, (errors, e) => console.log(errors, e))}
      >
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
          <MdOutlineLanguage />
          <Text as="span" ml="3">
            Language
          </Text>
        </Heading>
        {fields.map((field, index) => (
          <LanguageInput key={field.id} {...{ control, index, field }} />
        ))}
        <Button
          leftIcon={<IoAddOutline />}
          colorScheme="teal"
          variant="outline"
          type="button"
          mb={4}
          onClick={() =>
            append({ name: "", level: "" }, { focusName: "languages.0.name" })
          }
        >
          <Text as="span">Nouvelle Langue</Text>
        </Button>
      </form>
      <Divider orientation="horizontal" borderColor="gray.400" />
    </Box>
  );
}
