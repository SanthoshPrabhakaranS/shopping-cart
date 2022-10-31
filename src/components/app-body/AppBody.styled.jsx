import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled(Box)({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "1rem",
  padding: "1rem",
});

export const ProductsWrapper = styled(Box)({
  height: "400px",
  width: "280px",
  border: "1px solid #c7c7c7",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  gap: ".5rem",
  padding: ".5rem"
});

export const ProductImg = styled("img")({
  width: "100%",
  height: "250px",
  objectFit: "cover",
  overflow: "hidden",
  borderTopRightRadius: "10px",
  borderTopLeftRadius: "10px",
});

export const ProductDetails = styled("div")({
});

export const ItemCount = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "1rem",
  alignItems: "center"
});