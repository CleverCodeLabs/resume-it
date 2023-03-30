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
import { IoAddOutline, IoShareSocialOutline } from "react-icons/io5";
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
    <Box mb="4" pos="relative" id="network">
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
          <IoShareSocialOutline />
          <Text as="span" ml="3">
            Réseaux Sociaux
          </Text>
        </Heading>
        <Controller
          name="facebook"
          control={control}
          rules={{
            minLength: { value: 4, message: "Minimum length should be 4" },
          }}
          render={({ field: { onChange, onBlur, value, ref }, fieldState }) => (
            <FormControl isInvalid={fieldState.invalid} mb="4">
              <FormLabel
                htmlFor="facebook"
                mt="4"
                display="flex"
                alignItems="center"
              >
                <TiSocialFacebook />
                <Text as="span" ml="1">
                  Facebook
                </Text>
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
            <FormControl isInvalid={fieldState.invalid} mb="4">
              <FormLabel htmlFor="linkedIn" display="flex" alignItems="center">
                <TiSocialLinkedin />
                <Text as="span" ml="1">
                  LinkedIn
                </Text>
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
            <FormControl isInvalid={fieldState.invalid} mb="4">
              <FormLabel htmlFor="gitHub" display="flex" alignItems="center">
                <SlSocialGithub />
                <Text as="span" ml="1">
                  GitHub
                </Text>
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
            <FormControl isInvalid={fieldState.invalid} mb="4">
              <FormLabel htmlFor="portfolio" display="flex" alignItems="center">
                <CgWebsite />
                <Text as="span" ml="1">
                  Portfolio
                </Text>
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
            <FormControl isInvalid={fieldState.invalid} mb="4">
              <FormLabel htmlFor="other" display="flex" alignItems="center">
                <MdWeb />
                <Text as="span" ml="1">
                  Autre lien
                </Text>
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
        <Button
          leftIcon={<IoAddOutline />}
          colorScheme="teal"
          variant="outline"
          mb="4"
        >
          <Text as="span" ml="1">
            Ajout Réseaux Sociaux
          </Text>
        </Button>
      </form>
      <Divider orientation="horizontal" borderColor="gray.400" />
    </Box>
  );
}
