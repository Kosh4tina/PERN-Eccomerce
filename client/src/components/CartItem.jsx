import { Button, TableCell } from "@windmill/react-ui";
import { useCart } from "context/CartContext";
import { formatCurrency } from "helpers/formatCurrency";
import React from "react";

const CartItem = ({ item }) => {
  const { deleteItem } = useCart();

  return (
    <>
      <TableCell>{item.name}</TableCell>
      <TableCell>{formatCurrency(item.price)}</TableCell>
      <TableCell>
        <Button layout="Link" onClick={() => deleteItem(item.product_id)}><span>X</span></Button>
      </TableCell>
    </>
  );
};

export default CartItem;
