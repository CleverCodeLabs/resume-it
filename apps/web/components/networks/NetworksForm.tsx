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
import { IoShareSocialOutline } from "react-icons/io5";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { CgWebsite } from "react-icons/cg";
import { MdWeb } from "react-icons/md";

interface NetworksFormInput {
  facebook: string;
  linkedIn: string;
  gitHub: string;
  portfolio: string;
  other: string;
}

export default function NetworksForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NetworksFormInput>({
    defaultValues: {
      facebook: "",
      linkedIn: "",
      gitHub: "",
      portfolio: "",
      other: "",
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
        <IoShareSocialOutline />
        Réseaux Sociaux
      </Heading>
      <Controller
        name="facebook"
        control={control}
        rules={{
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="facebook">
              <TiSocialFacebook />
              Facebook
            </FormLabel>
            <Input
              id="facebook"
              placeholder="Votre Lien Facebook"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="linkedIn"
        control={control}
        rules={{
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="linkedIn">
              <TiSocialLinkedin />
              LinkedIn
            </FormLabel>
            <Input
              id="linkedIn"
              placeholder="Votre Lien LinkedIn"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="gitHub"
        control={control}
        rules={{
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="gitHub">
              <SlSocialGithub />
              GitHub
            </FormLabel>
            <Input
              id="gitHub"
              placeholder="Votre Lien GitHub"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />

      <Controller
        name="portfolio"
        control={control}
        rules={{
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="portfolio">
              <CgWebsite />
              Portfolio
            </FormLabel>
            <Input
              id="portfolio"
              placeholder="Votre Lien de portfolio"
              {...{ onChange, onBlur, value, ref }}
            />
            <FormErrorMessage>
              {fieldState.error && fieldState.error.message}
            </FormErrorMessage>
          </FormControl>
        )}
      />
      <Controller
        name="other"
        control={control}
        rules={{
          minLength: { value: 4, message: "Minimum length should be 4" },
        }}
        render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
          <FormControl isInvalid={fieldState.invalid}>
            <FormLabel htmlFor="other">
              <MdWeb />
              Autre lien
            </FormLabel>
            <Input
              id="other"
              placeholder="Autre lien"
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
