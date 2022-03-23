import React, { Fragment, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ReactComponent as SearchIcon } from "./assets/searchWithBg.svg";
import { ReactComponent as CartIcon } from "./assets/cartWithBg.svg";
import { ReactComponent as DescriptionIcon } from "./assets/description.svg";
import { ReactComponent as StarIcon } from "./assets/star.svg";
import { ReactComponent as ReviewerIcon } from "./assets/reviewr.svg";
import { ReactComponent as CancelIcon } from "./assets/cart-cancel.svg";
import {
  HeaderIcons,
  ImageWrapper,
  Image,
  Container,
  ProductDescription,
  ProductName,
  ProductPrice,
  DescriptionContainer,
  Border,
  ReviewText,
  Flex,
  ButtonWrapper,
  Button,
  Wrapper,
  Main,
  CartCount,
  BadgeWrapper,
  HorizontalLayout,
  CancelWrapper,
  SuccessMessage,
} from "./style";
import { Search } from "../buy/search";
import { addToCart } from "../../redux/cart/slice";
import Reviews from "../../components/review";
import Layout from "../../components/layout/layout";
import { Header } from "../../components/header";
import { formatPrice } from "../../utils/price";


const ProductDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProducts = useSelector((state) => state.products.products);
  const params = useParams();
  const product = allProducts.find((x) => x.id === params.id);
  const [openSearch, setOpenSearch] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [id, setId] = useState("");
  const cartItems = useSelector((state) => state.cart.cart);
  const [onAddToCart, setOnAddToCart] = useState(false);

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
  };

  return (
    <Layout overflow="auto">
      {openSearch ? (
        <Search
          showIcon={false}
          onClick={() => navigate("/Search")}
          top="10px"
          placeholder={"Search for Products"}
        />
      ) : (
        <div>
          <Header title="Details" />
          <HeaderIcons>
            <div>
              <SearchIcon onClick={() => setOpenSearch(true)} />
            </div>
            <div onClick={() => navigate("/Cart")}>
              <CartIcon />
              <CartCount>{cartItems ? cartItems.length : 0}</CartCount>
            </div>
          </HeaderIcons>
        </div>
      )}
      {showReview && !openSearch && <Reviews id={id} />}
      {onAddToCart && (
        <BadgeWrapper>
          <HorizontalLayout>
            <SuccessMessage>Item added to cart successfully</SuccessMessage>
          </HorizontalLayout>
          <CancelWrapper onClick={() => setOnAddToCart(false)}>
            <CancelIcon />
          </CancelWrapper>
        </BadgeWrapper>
      )}
      {!showReview && (
        <Fragment>
           <ImageWrapper>
              <Image src={product?.image} alt="" />
            </ImageWrapper>
          <Container>
            <ProductName>{product?.name}</ProductName>
            <ProductDescription margin='0'>{product?.description}</ProductDescription>
            <ProductPrice>
              {`${formatPrice(product?.minPrice)} - ${formatPrice(product?.maxPrice)} `}
              <span
                style={{ color: "#627483", fontSize: "12px", fontWeight: 400 }}
              >
                /Piece
              </span>
            </ProductPrice>
            <Border />
            <DescriptionContainer>
              <DescriptionIcon />
            </DescriptionContainer>
            <Border />
            <Flex>
              <ReviewText>Review and Ratings</ReviewText>
              <ReviewText
                color="#227EFF"
                onClick={() => {
                  setShowReview(true);
                  setId(product?.id);
                }}
              >
                View All
              </ReviewText>
            </Flex>
            <Flex justify="inherit">
              <StarIcon />
              <ReviewText size="12px" margin="-1% 0 0 1%">
                {product?.review}
              </ReviewText>
            </Flex>
            <ProductDescription margin="12px 0 0 0">
              {product?.comment}
            </ProductDescription>
            <Flex justify="inherit">
              <ReviewerIcon />
              <ReviewText size="12px" margin="1% 0 0 1%">
                {product?.reviewdBy}
              </ReviewText>
            </Flex>
          </Container>
          <Main>{""}</Main>
          <Wrapper paddingBottom="32px" height="65px">
            <ButtonWrapper>
              <Button
                border="none"
                onClick={() => {
                  handleAddToCart(product);
                  setOnAddToCart(true);
                }}
              >
                Add To Cart
              </Button>
              <Button bg="#FFFFFF" color="#2E4457" left="7px">
                WishList
              </Button>
            </ButtonWrapper>
          </Wrapper>
        </Fragment>
      )}
    </Layout>
  );
};

export default ProductDetails;
