import { SecondaryColor } from "../../../helpers/Theming";
import styled from "styled-components";

const BigHeading = styled.div`
  margin: 10px auto;
  display: flex;
  width: 70%;
  @media (max-width: 1280px) {
    width: 90%;
  }
  h1 {
    font-weight: normal;
    font-size: 20px;
    color: ${SecondaryColor};
  }
`;
export default BigHeading;
