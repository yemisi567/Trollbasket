import styled from "styled-components";

export const HeaderIcons = styled.div`
  display: flex;
  gap: 13px;
  position: absolute;
  right: 5%;
  top: 2.8%;
  align-items: center;
  justify-content: center;
`;

export const StyledCartIcon = styled.div`
  margin-top: -2%;
`;
export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 -1em;
  padding: 16px 32px 0 32px;
  background: white;
`;

export const Image = styled.img`
  width: 312px;
  height: 206px;
  margin: ${({ margin }) => margin || "16px 0"};
  padding: 0 !important;
  object-fit: cover;
  padding: 10px 5px;
  border-radius: 4px;
`;

export const Container = styled.div`
  width: 93%;
  margin: auto;
  margin-bottom: 10px;
  background-color: white;
  padding: 0 16px 0 16px;
`;

export const ProductName = styled.p`
  color: #212c3d;
  font-size: 14px;
  font-weight: 400;
  margin: 16px 0 0 0;
  line-height: 21px;
`;

export const ProductDescription = styled.p`
  color: #627483;
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;
  margin: ${({ margin }) => margin || "16px 0"};
`;

export const ProductPrice = styled.p`
  color: #212c3d;
  font-size: 16px;
  font-weight: 700;
  margin-top: 18px;
  line-height: 21px;
`;

export const DescriptionContainer = styled.div`
  margin-left: -6%;
`;
export const Border = styled.div`
  margin: 0 -16px 0 -16px;
  border: 0.3px solid #edf2f7;
`;
export const ReviewText = styled.div`
  font-size: ${({ size }) => size || "14px"};
  color: ${({ color }) => color || "#212C3D"};
  line-height: 21px;
  font-weight: 400;
  margin: ${({ margin }) => margin || null};
  text-align: ${({ align }) => align || null};
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || "space-between"};
  margin-top: 20px;
  padding: ${({ padding }) => padding || null};

`;
export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: fixed;
  bottom: 0;
  background: white;
  box-shadow: 0 1px 10px 0 #dddddd, 0 4px 5px 0 #23000000,
    0 2px 4px -1px #33000000;
  width: 100%;
  height: 80px;
  height: ${({ height }) => height || "80px"};
  padding-bottom: ${({ paddingBottom }) => paddingBottom || "60px"};
  justify-content: center;
  max-width: inherit;
  z-index: ${({ zIndex }) => zIndex || 100};

  @media (max-width: 576px) {
    width: 100%;
    margin-left: -5%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 90%;

`;

export const Button = styled.button`
    display: inline-block;
    background-color: ${({ bg }) => bg || "#227EFF"};
    border-radius: 4px;
    font-size: ${({ size }) => size || "14px"};
    font-weight: 500;
    height: ${({ height }) => height || "45px"};
    width: 100%;
    margin-left: ${({ left }) => left || null};
    margin-top: ${({ top }) => top || "32px"};
    color: ${({ color }) => color || "white"};
    border: ${({ border }) => border || "1px solid #2E4457"};
    padding: ${({ padding }) => padding || null};
    position: relative;
    overflow: hidden;
    outline: none;
    &:focus {
        display: block;
        outline: 0px;
    }
    &:disabled {
        opacity: 0.5;
    }
`;

export const Main = styled.main`
  background-color: #edf2f7;
  height: 15px;
  margin: 10px -16px 0 0px;
`;
export const CartCount = styled.main`
    width: 16px;
    height: 16px;
    background-color: #EE6F44;
    border-radius: 26px;
    position: absolute;
    margin-top: ${({ top }) => top || "-36px"};
    margin-left: ${({ left }) => left || "13px"};
    text-align: center;
    font-size: 10px;
    font-weight: bold;
    color: white;
`;

export const BadgeWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: -10px 10px 10px 10px;
    border-radius: 4px;
    padding: 8px 16px;
    background-color: #D3FDE9;
    position: absolute;
    width: 95%;
    height: 36px;
`;

export const HorizontalLayout = styled.div`
    display: flex;
    padding: 0px 16px;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`;

export const CancelWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const SuccessMessage = styled.h1`
    color: #023B20;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
`;