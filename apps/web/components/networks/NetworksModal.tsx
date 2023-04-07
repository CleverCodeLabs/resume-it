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
  Text
} from "@chakra-ui/react";
import { IoShareSocialOutline } from "react-icons/io5";
import { Controller, useForm } from "react-hook-form";
import React, { FC } from "react";

interface NetworksModalInput {
  id?: number;
  name: string;
  link: string;
}

type NetworksModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (network: any) => void;
  network?: any;
};

const NetworksModal: FC<NetworksModalProps> = ({
  isOpen,
  onClose,
  onSave,
  network,
}) => {
  const { control, watch, getValues, reset } = useForm<NetworksModalInput>({
    mode: "onBlur",
    values: {
      id: network?.id,
      name: network?.name || "",
      link: network?.link || "",
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
            Réseaux Sociaux
          </Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Controller
            name="name"
            control={control}
            rules={{
              required: "This is required",
            }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <FormControl isInvalid={fieldState.invalid} mb="4">
                <FormLabel htmlFor="name">Nom du Réseau Social</FormLabel>
                <Select
                  id="name"
                  placeholder="Sélectionner votre Réseau Social"
                  {...{ onChange, onBlur, value, ref }}
                >
                  <option value="Facebook">Facebook</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="GitHub">GitHub</option>
                  <option value="Portfolio">Portfolio</option>
                  <option value="Autre">Autre</option>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name="link"
            control={control}
            rules={{
              required: "This is required",
              minLength: {
                value: 4,
                message: "Minimum length should be 4",
              },
            }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <FormControl isInvalid={fieldState.invalid} mb="4">
                <Input
                  id="link"
                  placeholder={`Votre Lien ${watch("name")}`}
                  {...{ onChange, onBlur, value, ref }}
                />
                <FormErrorMessage>
                  {fieldState.error && fieldState.error.message}
                </FormErrorMessage>
              </FormControl>
            )}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Enregistrer
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NetworksModal;
