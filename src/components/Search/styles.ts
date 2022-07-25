import styled from "styled-components";
import { ReactComponent as Search } from "./../../utils/search.svg";

export const InputContainer = styled.div({
  width: "60%",
  position: "relative",
  "@media(max-width: 500px)": {
    width: "80%",
  },
});

export const Input = styled.input({
  backgroundColor: "#5A5C66",
  color: "#B2B7BF",
  border: "none",
  padding: "20px 25px",
  width: "100%",
  fontSize: "14px",
  ":focus": {
    outline: "none",
  },
});

export const SearchIcon = styled(Search)({
  position: "absolute",
  right: "15px",
  top: "30%",
  fontSize: "20px",
});
