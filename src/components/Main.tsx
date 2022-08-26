import { VStack, HStack } from "@chakra-ui/react";
import { useState } from "react";

import OrderBookAndTrades from "./OrderBook";
import Chart from "./Charts";
import Position from "./Positions";
import Account from "./Account";
import StatsBar from "./StatsBar";
import MarketLists from "./MarketLists";
import Order from "./Orders";
import Deposit from "./Account/Deposit";
import Withdraw from "./Account/Withdraw";
import { Mode } from "../utils/types";
import { useWeb3React } from "@web3-react/core";

export default function MainLayout() {
    const { active } = useWeb3React();
  const [mode, setMode] = useState(Mode.Order);
  return (
    <VStack align="stretch" w="100%" h="100%">
      {/*Nav*/}
      <HStack>
        <MarketLists />
        <StatsBar />
      </HStack>

      {/*Body*/}
      <HStack>
        <VStack w="324px" align="left" h="100%">
          <Account switchMode={setMode} />
          {mode === Mode.Deposit ? (
            <Deposit switchMode={setMode} />
          ) : mode === Mode.Order ? (
            <Order />
          ) : (
            <Withdraw switchMode={setMode} />
          )}
        </VStack>
        <OrderBookAndTrades />

        {/*Chart*/}
        <VStack align="left" h="100%" w="100%">
          {/*Nav in Chart*/}
          <Chart />
          {/* Position */}
          <Position />
        </VStack>
      </HStack>
    </VStack>
  );
}
