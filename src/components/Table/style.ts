import styled from "styled-components";
import { ReactComponent as ArrowSvg } from "./../../utils/arrow.svg";

interface ArrowProps {
  sorted: string | null;
}

export const PostsHeader = styled.div({
  backgroundColor: "#474955",
  color: "#FFFFFF",
  fontSize: "14px",
  display: "grid",
  gridTemplateColumns: "1fr 4fr 3fr",
  padding: "20px 0",
});

export const Button = styled.button({
  background: "none",
  border: "none",
  color: "#FFFFFF",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  gap: "20px",
  cursor: "pointer",
  "@media(max-width: 500px)": {
    gap: "5px",
  },
});

export const Arrow = styled(ArrowSvg)<ArrowProps>(({ sorted }) => ({
  transform: sorted === "Increment" ? "rotate(180deg)" : "none",
}));
