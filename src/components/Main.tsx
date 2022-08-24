import { VStack, HStack } from "@chakra-ui/react";

import OrderBookAndTrades from "./OrderBook";
import Chart from "./Charts";
import Position from "./Positions";
import Account from "./Account";
import StatsBar from "./StatsBar";
import MarketLists from "./MarketLists";
import Order from "./Orders";

export default function MainLayout() {
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
          <Account />
          <Order />
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
