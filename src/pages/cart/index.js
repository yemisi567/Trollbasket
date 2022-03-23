import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  deleteFromCart,
} from "../../redux/cart/slice";
import { ProductImagee } from "../../components/logo";
import { ReactComponent as DeleteIcon } from "./assets/delete-icon.svg";
import { ReactComponent as SuccesIcon } from "./assets/success-icon.svg";
import {
  Main,
  SavedItemsContainer,
  FlexContainer,
  Items,
  Border,
  RemoveText,
  RemoveCartWrapper,
  QuantityControls,
  QuantityCount,
  Input,
  Add,
  Substract,
  Wrapper,
  InnerWrapper,
  Text,
  Overlay,
  ScreenContainer,
  Title,
  SubTitle,
  ButtonWrapper,
} from "./style";
import { Button, Flex, ReviewText } from "../product-details/style";
import {
  GridBox,
  GridItem,
  ImageWrapper,
  NameContainer,
  PriceContainer,
  ProductInfo,
  ProductImage,
} from "../buy/style";
import { recent } from "../../data/productData";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/layout";
import { Header } from "../../components/header";
import { formatPrice } from "../../utils/price";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cart);
  const [showSuccesPage, setShowSuccesPage] = useState(false);
  const getAllPrices = cartItems.map((item) => item.maxPrice * item.quantity);
  const totalPrice = getAllPrices.reduce(
    (previousPrice, currentPrice) => previousPrice + currentPrice ,
    0
  );
  const handleRemovFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Layout>
      <Header title={"Carts"} />
      {showSuccesPage && (
        <Overlay bg="#227EFF">
          <ScreenContainer>
            <SuccesIcon />
            <Title>Checkout Succesful</Title>
            <SubTitle>Your checkout is now successful.</SubTitle>
          </ScreenContainer>
          <ButtonWrapper>
            <Button
              border="none"
              radius="4px"
              bg={"white"}
              color={"#227EFF"}
              onClick={() => navigate(-1)}
            >
              Got It
            </Button>
          </ButtonWrapper>
        </Overlay>
      )}
      {!showSuccesPage && (
        <Main>
          {cartItems.map((item, index) => (
            <SavedItemsContainer key={index}>
              <FlexContainer>
                <ProductImagee Icon={item?.image} />
                <Items>
                  {item?.name}
                  <br />
                  <span
                    style={{ fontWeight: 700 }}
                  >{formatPrice(item.maxPrice)}</span>
                </Items>
              </FlexContainer>
              <Border width='92%' left='16px'/>
              <FlexContainer top="0">
                <RemoveCartWrapper
                  onClick={() => {
                    dispatch(deleteFromCart(item.id));
                  }}
                >
                  <DeleteIcon />
                  <RemoveText>Delete</RemoveText>
                </RemoveCartWrapper>
                <QuantityControls>
                  <Substract
                    disabled={item.quantity === 1}
                    onClick={() => {
                      handleRemovFromCart(item.id);
                    }}
                  />
                  <QuantityCount>
                    <Input>{item.quantity || 0}</Input>
                  </QuantityCount>
                  <Add
                    onClick={() => {
                      dispatch(addToCart(item));
                    }}
                  />
                </QuantityControls>
              </FlexContainer>
            </SavedItemsContainer>
          ))}
          <Wrapper>
            <InnerWrapper>
              <Text weight="400">Items Total</Text>
              <Text color={"#212C3D"} weight={400}>
                {formatPrice(totalPrice)}
              </Text>
            </InnerWrapper>
            <InnerWrapper top="16px">
              <Text weight="400">TOTAL</Text>
              <Text weight="700" color={"#212C3D"}>
                {formatPrice(totalPrice)}
              </Text>
            </InnerWrapper>
            <Button
              height="56px"
              size="16px"
              border="none"
              onClick={() => {
                setShowSuccesPage(true);
              }}
            >
              Checkout
            </Button>
          </Wrapper>
          <Flex padding="16px">
            <ReviewText>Recently Viewed</ReviewText>
            <ReviewText color="#227EFF" onClick={() => navigate("/Search")}>
              View all
            </ReviewText>
          </Flex>
          <GridBox top='16px'>
            {recent.map((item, index) => (
              <GridItem radius={"8px"} key={index}>
                <ImageWrapper justifyContent="center">
                  <ProductImage src={item?.image} />
                </ImageWrapper>
                <ProductInfo padding="0">
                  <NameContainer>
                    {item?.description.toLowerCase()}
                  </NameContainer>
                  <PriceContainer>
                    {`${formatPrice(item.minPrice)} - ${formatPrice(item.maxPrice)} `}
                  </PriceContainer>
                  <NameContainer>{`MOQ ${item.moq} (pieces)`}</NameContainer>
                </ProductInfo>
              </GridItem>
            ))}
          </GridBox>
        </Main>
      )}
    </Layout>
  );
};

export default Cart;

