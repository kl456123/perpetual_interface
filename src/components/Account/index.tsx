import {
  HStack,
  Text,
  Spacer,
  ButtonGroup,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useWeb3React } from "@web3-react/core";

const SERVER_PORT = process.env.REACT_APP_SERVER_PORT;
const SERVER_HOST = process.env.REACT_APP_SERVER_HOST;
if (typeof SERVER_PORT === "undefined") {
  throw new Error(
    `REACT_APP_SERVER_PORT must be a defined environment variable`
  );
}

export default function Account() {
  const { library, account, activate, deactivate, active } = useWeb3React();
  const [accountInfo, setAccountInfo] = useState({
    margin: "0",
    position: "0",
  });

  useEffect(() => {
    const fetchAccountBalance = async () => {
      const url = `${SERVER_HOST}:${SERVER_PORT}/account/v1/${account}`;
      const res = await axios.get(url);
      const market = "PBTC-USDC";
      const balance = res.data.balances[market];
      setAccountInfo({ margin: balance.margin, position: balance.position });
    };
    if (account) {
      fetchAccountBalance();
    }
  }, [account]);

  return (
    <>
      <HStack>
        <Text>Account</Text>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal" size="sm">
            Deposit
          </Button>
          <Button colorScheme="teal" size="sm">
            Withdraw
          </Button>
        </ButtonGroup>
      </HStack>
      <Flex>
        <Box>
          <Text>Buying Power</Text>
        </Box>
        <Spacer />
        <Box>
          <Text>$0.00</Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text>Equity</Text>
        </Box>
        <Spacer />
        <Box>
          <Text>$0.00</Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text>Margin Usage</Text>
        </Box>
        <Spacer />
        <Box>
          <Text>$0.00</Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text>Account Leverage</Text>
        </Box>
        <Spacer />
        <Box>
          <Text>$0.00</Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text>Margin</Text>
        </Box>
        <Spacer />
        <Box>
          <Text>${accountInfo.margin}</Text>
        </Box>
      </Flex>
      <Flex>
        <Box>
          <Text>Position</Text>
        </Box>
        <Spacer />
        <Box>
          <Text>${accountInfo.position}</Text>
        </Box>
      </Flex>
    </>
  );
}
