import React, { FC } from "react";
import {
  Box,
  Flex,
  IconButton,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Spacer,
  Text
} from "@chakra-ui/react";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { RxDotsVertical } from "react-icons/rx";

type LanguageItemProps = {
  id: number;
  name: string;
  level: string;
  onEdit: (language: any) => void;
  onDelete: () => void;
};

const LanguageItem: FC<LanguageItemProps> = ({ name, level, onEdit, onDelete }) => {
  return (
    <ListItem border="1px" borderColor="gray.200" borderRadius="md" mb="2" pr={2}>
      <Flex alignItems="center">
        <Box>
          <Text p="2" as='b'>{name}</Text>
          <Text p="2">{level}</Text>
        </Box>
        <Spacer />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<RxDotsVertical />}
            variant="outline"
            borderRadius={"full"}
            border="none"
          />
          <Portal>
            <MenuList zIndex={"popover"}>
              <MenuItem icon={<FiEdit3 />} onClick={onEdit}>
                Modifier
              </MenuItem>
              <MenuItem icon={<MdDeleteOutline />} onClick={onDelete}>Supprimer</MenuItem>
            </MenuList>
          </Portal>
        </Menu>
      </Flex>
    </ListItem>
  );
};

export default LanguageItem;
