import React, { useContext } from "react";
import { Box, Typography, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Container, Input, NavBtn } from "./Navbar.styled";
import { cartContext } from "../../context/CartContext";
import CartItem from "../cart-item";

const Navbar = () => {
  const { cart, setShowCart, showCart, setSearch } = useContext(cartContext);
  return (
    <>
      <Container onClick={() => showCart && setShowCart(false)}>
        <Typography variant="h6" color="#fff">
          Shopping cart
        </Typography>
        <Box>
          <Input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Box>
        <NavBtn
          onClick={() => {
            setShowCart(!showCart);
          }}
        >
          <Badge
            badgeContent={cart.length > 0 ? cart.length : "0"}
            color="primary"
          >
            <ShoppingCartIcon fontSize="medium" sx={{ color: "#fff" }} />
          </Badge>
        </NavBtn>
      </Container>
      {showCart ? <CartItem /> : null}
    </>
  );
};

export default Navbar;
