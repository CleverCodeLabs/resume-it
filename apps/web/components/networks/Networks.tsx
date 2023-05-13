import {
  Box,
  Button,
  Divider,
  List,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { FC, useReducer, useState } from "react";
import { IoAddOutline, IoShareSocialOutline } from "react-icons/io5";
import { SectionHeader } from "ui";
import NetworkItem from "./NetworkItem";
import NetworksModal from "./NetworksModal";
import reducer, { initialNetworksState, Network } from "./reducer";

const Networks: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);
  const [networksState, dispatch] = useReducer(reducer, initialNetworksState);

  const networksItem = networksState.networks.map((network) => (
    <NetworkItem
      key={network.id}
      id={network.id}
      name={network.name}
      link={network.link}
      icon={network.icon}
      onEdit={() => {
        setSelectedNetwork(network);
        onOpen();
      }}
      onDelete={() => dispatch({ type: "remove", id: network.id })}
    />
  ));

  return (
    <Box mb="4" pos="relative" id="network">
      <SectionHeader>
        <IoShareSocialOutline />
        <Text as="span" ml="3">
          Réseaux Sociaux
        </Text>
      </SectionHeader>
      <List className="network">{networksItem}</List>
      <Button
        onClick={() => {
          onOpen();
        }}
        leftIcon={<IoAddOutline />}
        variant="outline"
        mb="4"
      >
        <Text as="span" ml="1">
          Ajout Réseaux Sociaux
        </Text>
      </Button>
      <NetworksModal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setSelectedNetwork(null);
        }}
        network={selectedNetwork}
        onSave={(network) => {
          if (network.id) {
            dispatch({ type: "edit", ...network });
          } else {
            dispatch({ type: "add", ...network });
          }
          setSelectedNetwork(null);
        }}
      />
      <Divider orientation="horizontal" borderColor="gray.400" />
    </Box>
  );
};

export default Networks;
