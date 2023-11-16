import styled from "styled-components";
import { devices } from "../../styles/deviceSizes";

export const SticksContainer = styled.div`
  max-width: 20px;
  max-height: 40px;
  margin: 5px 12px;
  display: flex;
  justify-content: center;

  img {
    max-width: 22px;
    max-height: 22px;
    cursor: pointer;
  }

  @media ${devices.mobileM} {
    max-width: 20px;
    max-height: 40px;
    margin: 5px 15px;
    display: flex;
    justify-content: center;

    img {
      max-width: 25px;
      max-height: 25px;
    }
  }

  @media ${devices.tablet} {
    max-width: 25px;
    max-height: 40px;
    margin: 5px 20px;
    display: flex;
    justify-content: center;

    img {
      max-width: 30px;
      max-height: 30px;
    }
  }
`;
