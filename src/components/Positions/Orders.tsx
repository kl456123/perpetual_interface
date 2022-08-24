import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tag,
  Td,
  Tbody,
  TableCaption,
} from "@chakra-ui/react";

export interface Order {
  status: number;
  side: string;
  amountInETH: number;
  price: number;
  trigger: number;
  goodTill: number;
}

export interface OrdersProps {
  orders: Order[];
}

export default function Orders(props: OrdersProps) {
  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Status</Th>
            <Th>Side</Th>
            <Th>
              Amount/Filled<Tag>ETH</Tag>
            </Th>
            <Th>Funding Rate</Th>
            <Th>Position</Th>
            <Th>Oracle Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {props.orders.length
            ? props.orders.map((order) => (
                <Tr>
                  <Td>{order.status}</Td>
                  <Td>{order.side}</Td>
                  <Td isNumeric>{order.amountInETH}</Td>
                  <Td isNumeric>{order.price}</Td>
                  <Td isNumeric>{order.trigger}</Td>
                  <Td isNumeric>{order.goodTill}</Td>
                </Tr>
              ))
            : null}
        </Tbody>
        {props.orders.length ? null : (
          <TableCaption>You have no orders.</TableCaption>
        )}
      </Table>
    </TableContainer>
  );
}
