import {
  Control,
  Controller,
  useFieldArray,
  useForm,
  useWatch,
} from "react-hook-form";

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
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
    <div>
      <Controller
        name={`languages.${index}.name`}
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
        name={`languages.${index}.level`}
        control={control}
        rules={{
          required: "This is required",
        }}
        render={({ field }) => (
          <Select placeholder="Sélectionner votre niveau" {...field}>
            <option value="debutant">Débutant</option>
            <option value="intermediaire">Intermédiaire</option>
            <option value="courant">Courant</option>
            <option value="bilingue">Bilingue</option>
            <option value="maternelle">Maternelle</option>
          </Select>
        )}
      />
    </div>
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
    <form
      onSubmit={handleSubmit(onSubmit, (errors, e) => console.log(errors, e))}
    >
      <Heading as="h2" size="xl">
        <MdOutlineLanguage />
        Languages
      </Heading>
      {fields.map((field, index) => (
        <LanguageInput key={field.id} {...{ control, index, field }} />
      ))}
      <Button
        leftIcon={<IoAddOutline />}
        colorScheme="teal"
        variant="outline"
        type="button"
        onClick={() =>
          append({ name: "", level: "" }, { focusName: "languages.0.name" })
        }
      >
        Nouvelle Langue
      </Button>
      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}
