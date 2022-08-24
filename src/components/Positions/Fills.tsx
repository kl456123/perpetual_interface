import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  TableCaption,
} from "@chakra-ui/react";

export interface Fill {
  time: number;
  type: string;
  side: string;
  amount: number;
  price: number;
  totalFee: number;
  liquidity: number;
}

export interface FillsProps {
  fills: Fill[];
}

export default function Fills(props: FillsProps) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Time</Th>
            <Th>Type</Th>
            <Th>Side</Th>
            <Th>Amount</Th>
            <Th>Total/Fee</Th>
            <Th>Liquidity</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.fills.length
            ? props.fills.map((fill) => (
                <Tr>
                  <Td>{fill.time}</Td>
                  <Td>{fill.type}</Td>
                  <Td isNumeric>{fill.side}</Td>
                  <Td isNumeric>{fill.amount}</Td>
                  <Td isNumeric>{fill.price}</Td>
                  <Td isNumeric>{fill.totalFee}</Td>
                  <Td isNumeric>{fill.liquidity}</Td>
                </Tr>
              ))
            : null}
        </Tbody>
        {props.fills.length ? null : (
          <TableCaption>You have no fills.</TableCaption>
        )}
      </Table>
    </TableContainer>
  );
}
