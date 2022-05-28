import styled from "styled-components";
const getType = (type) => {
  switch (type) {
    case "secondary":
      return {
        border: "1px solid #e6e9ec",
        color: "#0D263B",
      };
    case "primary":
      return {
        background: "0061DF",
        color: "#FFFFFF",
        border: "none",
      };
    default:
      return {
        border: " 1px solid #E6E9EC",
        color: "#FFFFFF",
      };
  }
};
const Container = styled.div`
  display: flex;
  font-family: "Monserrat";
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: ${({ height }) => height || "44px"};
  max-width: ${({ width }) => (width ? width : "100%")};
  width: ${({ width }) => (width ? width : "100%")};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  ${({ type }) => getType(type)}
`;
export { Container };
