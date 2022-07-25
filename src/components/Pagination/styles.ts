import styled from "styled-components";
import { Link } from "react-router-dom";

export const PaginationContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: "#474955",
  fontSize: "24px",
  fontWeight: "500",
  padding: "15px 40px",
  "@media(max-width: 500px)": {
    padding: "15px 0",
  },
});

export const Button = styled(Link)({
  border: "none",
  background: "none",
  fontSize: "24px",
  color: "#474955",
});

export const Span = styled.span<{ current: boolean }>(({ current }) => ({
  color: current ? "#7EBC3C" : "#474955",
  fontWeight: current ? "700" : "500",
}));

export const PagesItem = styled.div({
  display: "flex",
  justifyContent: "center",
  width: "45%",
  alignItems: "center",
  gap: "10px",
});
