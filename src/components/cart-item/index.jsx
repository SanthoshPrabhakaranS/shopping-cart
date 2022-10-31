import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import {
  CartContainer,
  CartRight,
  CartImg,
  CartDetails,
  Button,
} from "./CartItem.Styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartItem = () => {
  const { cart, setCart } = useContext(cartContext);

  const removeHandler = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const replaceItem = (item) => {
    setCart((old) =>
      old.map((product) => (product.id === item.id ? item : product))
    );
  };

  const incrementHandler = (item) => {
    replaceItem({ ...item, quantity: item.quantity + 1 });
  };

  const decrementHandler = (item) => {
    if (item.quantity === 1) {
      return;
    }
    replaceItem({ ...item, quantity: item.quantity - 1 });
  };

  return (
    <>
      {cart.length > 0 ? (
        <CartContainer>
          {cart.map((item) => {
            return (
              <CartRight key={item.id}>
                <CartImg src={item.image} alt="image" />
                <CartDetails>
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{item.rating}</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: ".5rem",
                    }}
                  >
                    <Button variant="contained" disableElevation size="small" onClick={() => decrementHandler(item)}>
                      -
                    </Button>
                    <p>{item.quantity}</p>
                    <Button variant="contained" disableElevation size="small" onClick={() => incrementHandler(item)}>
                      +
                    </Button>
                  </div>
                </CartDetails>
                <div onClick={() => removeHandler(item.id)}>
                  <RemoveCircleOutlineIcon
                    fontSize="small"
                    sx={{
                      padding: "5px 5px 0 0",
                      color: "#a8a4a4",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </CartRight>
            );
          })}
        </CartContainer>
      ) : (
        <CartContainer>
          <p
            style={{
              textAlign: "center",
            }}
          >
            No items in the cart
          </p>
        </CartContainer>
      )}
    </>
  );
};

export default CartItem;
