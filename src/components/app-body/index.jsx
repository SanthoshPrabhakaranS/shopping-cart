import React from "react";
import {
  Container,
  ProductDetails,
  ProductImg,
  ProductsWrapper,
} from "./AppBody.styled";
import products from "../../context/Data";
import { Button } from "@mui/material";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";

const AppBody = () => {
  const {
    cart,
    setCart,
    setShowCart,
    showCart,
    search,
  } = useContext(cartContext);
  const addHandler = (item, id) => {
    if (!cart.some((e) => e.id === item.id)) {
        setCart((old) => [...old, item]);
        return;
    }

    setCart((old) =>
        old.map((product) => {
            if (product.id !== item.id) {
                return product;
            }

            ++product.quantity;
            return { ...product };
        })
    );
};

  const searchRows = (rows) => {
    return rows.filter((row) => row.name.toLowerCase().indexOf(search) > -1);
  };
  const rows = searchRows(products);

  return (
    <Container onClick={() => showCart && setShowCart(false)}>
      {rows && rows.length > 0 ? (
        rows.map((item) => {
          return (
            <ProductsWrapper key={item.id}>
              <ProductImg src={item.image} alt="image" />
              <ProductDetails>
                <p>{item.name}</p>
                <p>Price: {item.price}</p>
                <p>Rating: {item.rating}</p>
                <p>Review: {item.numReviews}</p>

                <Button
                  variant="contained"
                  disableElevation
                  size="small"
                  color="primary"
                  onClick={() => addHandler(item, item.id)}
                >
                  Add to cart
                </Button>
              </ProductDetails>
            </ProductsWrapper>
          );
        })
      ) : (
        <h4>No items</h4>
      )}
    </Container>
  );
};

export default AppBody;
