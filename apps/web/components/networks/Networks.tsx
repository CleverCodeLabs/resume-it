import { Box, Button, Divider, Heading, List, Text, useDisclosure } from "@chakra-ui/react";
import { IoAddOutline, IoShareSocialOutline } from "react-icons/io5";
import React, { FC, useReducer, useState } from "react";
import NetworksModal from "./NetworksModal";
import NetworkItem from "./NetworkItem";
import reducer, { initialNetworksState } from "./reducer";


const Networks: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedNetwork, setSelectedNetwork] = useState<any>(null);
  const [networksState, dispatch] = useReducer(reducer, initialNetworksState);

  const networksItem = networksState.networks.map((network: any) => (
    <NetworkItem
      key={network.id}
      id={network.id}
      name={network.name}
      link={network.link}
      onEdit={() => {
        setSelectedNetwork(network);
        onOpen();
      }}
      onDelete={() => dispatch({type: 'remove', id: network.id})}
    />
  ));

  return (
      <Box mb="4" pos="relative" id="network">
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
        <List className="network">{networksItem}</List>
        <Button
          onClick={() => {
            onOpen();
          }}
          leftIcon={<IoAddOutline />}
          colorScheme="teal"
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
              dispatch({type: 'edit', ...network});
            } else {
              dispatch({type: 'add', ...network})
            }
            setSelectedNetwork(null);
          }}
        />
        <Divider orientation="horizontal" borderColor="gray.400" />
      </Box>
  );
};

export default Networks;
