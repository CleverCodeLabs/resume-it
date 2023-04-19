import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { IoShareSocialOutline } from "react-icons/io5";
import { Controller, useForm } from "react-hook-form";
import React, { ElementType, FC } from "react";
import Select, { Option } from "../select/Select";
import { Network, netWorkIcons } from "./network";

interface NetworksModalInput {
  id?: number;
  network: { name: string; icon: ElementType };
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
      network: {
        name: network?.name || "",
        icon: network?.icon,
      },
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
  const options: Option[] = Object.values(Network).map((network, index) => ({
    id: index,
    name: network,
    icon: netWorkIcons[network],
  }));

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
            name="network"
            control={control}
            rules={{
              required: "This is required",
            }}
            render={({
              field: { onChange, onBlur, value, ref },
              fieldState,
            }) => (
              <FormControl isInvalid={fieldState.invalid} mb="4">
                <Select {...{ onChange, onBlur, value, options }} />
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
                  placeholder={`Votre Lien ${watch("network.name")}`}
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
