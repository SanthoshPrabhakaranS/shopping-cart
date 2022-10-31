import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Container = styled(Box)({
  backgroundColor: "#343a40",
  width: "100%",
  height: "4rem",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  position: "relative"
});

export const NavBtn = styled("button")({
    border: "none",
    background: "#28a745",
    padding: ".2rem 1rem",
    borderRadius: "5px",
    cursor: "pointer"
});

export const Input = styled("input")({
    outline: "none",
    flex: 2,
    width: "100%",
    height: "1.5rem",
    padding: ".2rem .4rem",
    borderRadius: "5px",
    border: "none"
});