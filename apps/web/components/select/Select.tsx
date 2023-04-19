import {
  Button,
  Icon,
  List,
  ListIcon,
  ListItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { ElementType, FC, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GrCircleQuestion } from "react-icons/gr";

export interface Option {
  id?: number;
  icon: ElementType;
  name: string;
}

type SelectProps = {
  onChange: (...event: any[]) => void;
  onBlur: () => void;
  value: any;
  ref?: (instance: any) => void;
  options: Option[];
};

const Select: FC<SelectProps> = ({ onChange, onBlur, value, ref, options }) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>({
    name: "Select option",
    icon: GrCircleQuestion,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (!!value.name) {
      setSelectedOption(value);
    }
  }, [value]);
  const handleListItemClick = (option: Option) => {
    onChange(option);
    setSelectedOption(option);
    onClose();
  };

  const listItems = options?.map((option) => (
    <ListItem
      key={option.id}
      onClick={() => {
        handleListItemClick(option);
      }}
      cursor="grab"
    >
      <ListIcon as={option.icon} />
      <Text as="span">{option.name}</Text>
    </ListItem>
  ));

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <PopoverTrigger>
        <Button
          w="100%"
          justifyContent="start"
          bg="none"
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          mb="2"
        >
          <Text display="flex" alignItems="center">
            <Icon as={selectedOption?.icon} mr="2" />
            {selectedOption?.name}
          </Text>
          <Spacer />
          <Icon as={IoIosArrowDown} />
        </Button>
      </PopoverTrigger>
      <PopoverContent id="name">
        <List spacing={3} ml="2">
          {listItems}
        </List>
      </PopoverContent>
    </Popover>
  );
};
export default Select;
