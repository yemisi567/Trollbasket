import styled from "styled-components";
import { ReactComponent as SubstractIcon } from "./assets/Minus.svg";
import { ReactComponent as AddIcon } from "./assets/Plus.svg";

export const Main = styled.main`
  padding-top: 0.5px;
  background-color: white;
  width: 100%;
  padding-bottom: 100px;
`;

export const SavedItemsContainer = styled.div`
  margin: 8px -10px 4px -16px;
  background: #ffffff;
  height: 112px;
  border: none;
  border-radius: 4px;
  padding: 3px 15px 15px 15px;
  box-shadow: 0px 15px 84px rgb(0 0 0 / 5%);
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${({ top }) => top || "16px"};
  margin-left: 16px;
`;

export const Items = styled.div`
  padding-left: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #212c3d;
  margin-top: -2%;
`;
export const Border = styled.div`
  border: 0.5px solid #edf2f7;
  margin-top: 7px;
  margin-bottom: 5px;
  width: ${({ width }) => width || null};
  margin-left: ${({ left }) => left || null};
`;
export const RemoveText = styled.div`
  color: #212c3d;
  font-size: 12px;
  line-height: 21px;
  letter-spacing: 0.01em;
  font-weight: 400;
`;

export const RemoveCartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65px;
`;

export const QuantityControls = styled.div`
  display: flex;
  position: absolute;
  margin-left: 59%;
`;

export const Add = styled(AddIcon)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-left: 8px !important;
  margin-top: -2px;
`;

export const Substract = styled(SubstractIcon)`
  cursor: pointer;
  width: 28px;
  height: 28px;
  margin-right: 8px !important;
  margin-top: -2px;
  pointer-events: ${({ disabled }) => disabled && "none"};
`;

export const Input = styled.p`
  font-size: 11.2px;
  font-weight: 500;
  max-width: 35px;
  border: none;
  text-align: center;
  background-color: white;
  height: 27px;
  border-radius: 2px;
  margin-top: -7px;
`;

export const QuantityCount = styled.span`
  font-size: 12px;
  font-weight: 500;
  margin-top: 0;
  padding: 8px 0;
  width: 35px;
  text-align: center;
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding: 1.2em;
  margin-top: 8px;
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ top }) => top || null};
`;

export const Text = styled.div`
  font-weight: ${({ weight }) => weight || "700"};
  font-size: ${({ font }) => font || "14px"};
  line-height: 18px;
  color: ${({ color }) => color || "#212C3D"};
  margin: ${({ margin }) => margin || null};
`;

export const ChildrenWrapper = styled.div`
  width: 100%;
  padding: 24px 16px 24px 16px;
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1100;
  justify-content: center;
  position: ${({ position }) => position || "absolute"};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${({ bg }) => bg || "white"};

  @media (max-width: 576px) {
    position: ${({ mposition }) => mposition || "fixed"};
  }
`;

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60%;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 16px 16px 24px 16px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  font-weight: ${({ weight }) => weight || "500"};
  text-align: center;
  color: white;
  line-height: 36px;
  margin-top: 24px;
`;

export const SubTitle = styled.h3`
  font-size: ${({ size }) => size || "14px"};
  font-weight: 400;
  text-align: center;
  color: white;
  line-height: 21px;
  margin-bottom: 21px;
  padding: 9px 30px 0 30px;
`;
