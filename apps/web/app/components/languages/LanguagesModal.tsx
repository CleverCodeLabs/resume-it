import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { IoShareSocialOutline } from "react-icons/io5";

interface LanguagesModalInput {
  id?: number;
  name: string;
  level: string;
}

type LanguagesModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (language: any) => void;
  language?: any;
};

const LanguagesModal: FC<LanguagesModalProps> = ({
  isOpen,
  onClose,
  onSave,
  language,
}) => {
  const { control, getValues, reset } = useForm<LanguagesModalInput>({
    mode: "onBlur",
    values: {
      id: language?.id,
      name: language?.name || "",
      level: language?.level || "",
    },
  });

  const handleClose = () => {
    onClose();
    reset();
  };

  const handleSave = () => {
    onSave(getValues());
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader as="h2" display="flex" alignItems="center">
          <IoShareSocialOutline />
          <Text as="span" ml="3">
            Languages
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Controller
            name="name"
            control={control}
            rules={{
              required: "This is required",
              minLength: { value: 4, message: "Minimum length should be 4" },
            }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
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
            name="level"
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
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blackAlpha" mr={3} onClick={handleSave}>
            Enregistrer
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default LanguagesModal;
