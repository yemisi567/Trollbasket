import React, { Fragment, useEffect, useRef, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/layout";
import Slideshow from "../../components/slideshow/Slideshow";
import { ReactComponent as CartIcon } from "./assets/cart.svg";
import { ReactComponent as LocationIcon } from "./assets/bag.svg";
import { ReactComponent as DropDownIcon } from "./assets/dropdown.svg";
import { ReactComponent as CategoriesIcon } from "./assets/categories.svg";
import { ReactComponent as ShopsIcon } from "./assets/shops.svg";
import { ReactComponent as PopularIcon } from "./assets/popular-products.svg";
import { ReactComponent as RecommendedIcon } from "./assets/recommended.svg";
import { ReactComponent as WalletIcon } from "./assets/wallet.svg";
import { ReactComponent as BuyIcon } from "./assets/buy.svg";
import { ReactComponent as HomeIcon } from "./assets/home.svg";
import { ReactComponent as DealsIcon } from "./assets/deals.svg";
import { ReactComponent as MoreIcon } from "./assets/more.svg";
import { ReactComponent as OrderIcon } from "./assets/order.svg";
import { Search } from "./search";

import {
  Container,
  ContentWrapper,
  Flex,
  Border,
  TextContainer,
  GridBox,
  GridItem,
  ImageWrapper,
  PriceContainer,
  ProductImage,
  ProductInfo,
  NameContainer,
  Wrapper,
  NavBar,
  DropDownContainer,
  Heading,
} from "./style";
import { locations, products } from "../../data/productData";
import { addProducts } from "../../redux/products/slice";
import { CartCount } from "../product-details/style";
import { formatPrice } from "../../utils/price";


const Buy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchedOptions, setSearchedOptions] = useState(products);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const cartItems = useSelector((state) => state.cart.cart);

  useEffect(() => {
    dispatch(addProducts(products));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (products && products.length > 0 && searchValue) {
      const searchResults = products.filter((x) =>
        String(x.name).toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchedOptions(searchResults);
    } else {
      setSearchedOptions(products);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, searchValue]);

  useEffect(() => {
    if (products && products.length > 0 && searchLocation) {
      const searchResults = products.filter((x) =>
        String(x.location).toLowerCase().includes(searchLocation.toLowerCase())
      );
      setSearchedOptions(searchResults);
    } else {
      setSearchedOptions(products);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, searchLocation]);

  return (
    <Layout>
      <Fragment>
        <Container top="0px" bottom="100px">
          <Heading>Trollbasket</Heading>
          <ContentWrapper>
            <Flex top='0'>
              <LocationIcon className='icon' />
              <DropDownContainer onClick={onClick}>
                  <span className="icon-text icon"> Lagos</span>
                  <DropDownIcon style={{ marginLeft: 5 }} onClick={onClick} />
                <nav
                  ref={dropdownRef}
                  className={`menu ${isActive ? "active" : "inactive"}`}
                >
                  <ul>
                    {locations.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSearchLocation(item?.location);
                        }}
                      >
                        {item?.location}
                      </li>
                    ))}
                  </ul>
                </nav>
              </DropDownContainer>
            </Flex>
            <Border />
            <Flex >
              <OrderIcon />
              <span className="icon-text">My Orders</span>
            </Flex>
            <Border />
            <Flex onClick={() => navigate("/Cart")} >
              <CartIcon />
              <CartCount top="-20px" left="4px">
                {cartItems ? cartItems.length : 0}
              </CartCount>
              <span className="icon-text">Cart</span>
            </Flex>
          </ContentWrapper>
          <Search
            top='24px'
            placeholder={"Search Merchbuy"}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <Slideshow />
          <ContentWrapper top="13px">
            <CategoriesIcon />
            <PopularIcon />
            <RecommendedIcon />
            <ShopsIcon />
          </ContentWrapper>
          <ContentWrapper>
            <TextContainer>
              Product <br />
              categories
            </TextContainer>
            <TextContainer>
              Popular
              <br /> Products
            </TextContainer>
            <TextContainer>
              Recommended
              <br /> Products
            </TextContainer>
            <TextContainer top="-5px" right="2%">
              Shops
            </TextContainer>
          </ContentWrapper>
          <GridBox>
            {searchedOptions.map((item, index) => (
              <div key={index} 
              onClick={() => {
                navigate("products/" + item.id);
              }}> 
                <GridItem radius={"8px"}>
                  <ImageWrapper
                    justifyContent="center"
                  >
                    <ProductImage src={item?.image} />
                  </ImageWrapper>
                  <ProductInfo padding="0">
                    <NameContainer>{item?.name.toLowerCase()}</NameContainer>
                    <PriceContainer>
                      {`${formatPrice(item.minPrice)} - ${formatPrice(item.maxPrice)} `}
                    </PriceContainer>
                    <NameContainer>{`MOQ ${item.moq} (pieces)`}</NameContainer>
                  </ProductInfo>
                </GridItem>
              </div>
            ))}
          </GridBox>
        </Container>
        <Fragment>
          <Wrapper>
            <NavBar>
              <Link to="/Home" className="nav__link">
                <HomeIcon />
                <span className="nav__text">Home</span>
              </Link>
              <Link to="/Buy" className="nav__link">
                <BuyIcon />
                <span className="nav__text" style={{ color: "#227EFF" }}>
                  Buy
                </span>
              </Link>
              <Link to="/Deal" className="nav__link">
                <DealsIcon />
                <span className="nav__text">Deals</span>
              </Link>
              <Link to="/Wallet" className="nav__link">
                <WalletIcon />
                <span className="nav__text">Wallet</span>
              </Link>
              <Link to="/More" className="nav__link">
                <MoreIcon />
                <span className="nav__text">More</span>
              </Link>
            </NavBar>
          </Wrapper>
        </Fragment>
      </Fragment>
    </Layout>
  );
};

export default Buy;
