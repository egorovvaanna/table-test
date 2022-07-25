import styled from "styled-components";

export const TableBody = styled.div({
  fontSize: "14px",
  display: "grid",
  height: "auto",
  gridTemplateColumns: "1fr 4fr 3fr",
  div: {
    border: "1px solid #E3E6EC",
    borderCollapse: "collapse",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    ":first-child": {
      justifyContent: "center",
    },
  },
});
