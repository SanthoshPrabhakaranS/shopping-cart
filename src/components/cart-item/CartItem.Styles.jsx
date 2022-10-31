import styled from "@emotion/styled";

export const CartContainer = styled("div")({
  width: "300px",
  maxHeight: "270px",
  padding: ".5rem",
  border: "1px solid #d0cdcd",
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  overflowY: "auto",
  borderRadius: "10px",
  position: "absolute",
  top: "10%",
  right: "3%",
  backgroundColor: "#e3e2e2",
});

export const CartImg = styled("img")({
  height: "95px",
  width: "130px",
});

export const CartRight = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  gap: ".5rem",
  border: ".5px solid #d0cdcd",
  padding: ".5rem",
  backgroundColor: "#ffffff",
});

export const CartDetails = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  fontSize: ".7rem",
  "& p:nth-of-type(2),p:nth-of-type(3)": {
    marginTop: "-.4rem",
  },
});

export const CartButtons = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: ".5rem",
});

export const ActionBtn = styled("div")({
  height: "17px",
  width: "17px",
  borderRadius: "50%",
  background: "#edecec",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer"
});

export const Button = styled("button")({
  padding: "2px 10px",
  outline: "none",
  backgroundColor: "#1e82e5",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  borderRadius: "3px"
});
