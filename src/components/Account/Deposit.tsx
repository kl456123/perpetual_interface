import {
  VStack,
  HStack,
  Spacer,
  CloseButton,
  Select,
  Tag,
  Text,
  Heading,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import { Mode } from "../../utils/types";

export default function Deposit(props: { switchMode: (mode: Mode) => void }) {
  return (
    <VStack align="left">
      <HStack>
        <Heading>Deposit</Heading>
        <Spacer />
        <CloseButton onClick={() => props.switchMode(Mode.Order)}></CloseButton>
      </HStack>
      <Text>Asset</Text>
      <Select defaultValue="option1">
        <option value="option1">
          USD Coin<Tag>USDC</Tag>
        </option>
        <option value="option2">
          Tether<Tag>USDT</Tag>
        </option>
        <option value="option3">
          DAI<Tag>DAI</Tag>
        </option>
      </Select>
      <Text>Amount</Text>
      <InputGroup size="md">
        <Input pr="4.5rem" placeholder="0.0000" />
        <InputRightElement width="4.5rem">
          <Text>MAX</Text>
        </InputRightElement>
      </InputGroup>
    </VStack>
  );
}
