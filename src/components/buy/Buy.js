import React, { Fragment, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Layout from "../layout/layout";
import Slideshow from "../slideshow/Slideshow";
import { ReactComponent as BagIcon } from "./assets/home.svg";
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
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../../data/productData";
import { addData } from "../../redux/products/actions";
import ProductDetails from "../product-details";

const Buy = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const allProducts = useSelector((state) => state.test);
  const [searchedOptions, setSearchedOptions] = useState(products);
  const [id, setId] = useState("");
  const [data, setData] = useState({});
  const [showProductDetail, setShowProductDetails] = useState(false);

  useEffect(() => {
    dispatch(addData());

    // if (products && products.length > 0 && searchValue) {
    //   const searchResults = products.filter((x) =>
    //     String(x.name).toLowerCase().includes(searchValue.toLowerCase())
    //   );
    //   setSearchedOptions(searchResults);
    // } else {
    //   setSearchedOptions(products);
    // }
  }, [dispatch, searchValue]);

  return (
    <Layout>
      {showProductDetail && <ProductDetails id={id} data={data}/>}
      {!showProductDetail && (
        <Fragment>
          <Container top="0px" bottom="150px">
            <h2 style={{ fontSize: 14, marginTop: 20 }}>Trollbasket</h2>
            <ContentWrapper>
              <Flex>
                <LocationIcon />
                <span style={{ marginLeft: 5 }}> Lagos</span>
                <DropDownIcon style={{ marginLeft: 5 }} />
              </Flex>
              <Border />
              <Flex>
                <BagIcon />
                <span style={{ marginLeft: 5 }}>My Orders</span>
              </Flex>
              <Border />
              <Flex>
                <CartIcon />
                <span style={{ marginLeft: 5 }}>Cart</span>
              </Flex>
            </ContentWrapper>
            <Search
              placeholder={"Search Merchbuy"}
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />

            <Slideshow />
            <ContentWrapper top="25px">
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
                <div key={index}>
                  <GridItem radius={"8px"}>
                    <ImageWrapper
                      justifyContent="center"
                      onClick={() => {
                        setId(item.id);
                         setData(item)
                        setShowProductDetails(true);
                      }}
                    >
                      <ProductImage src={item?.image} />
                    </ImageWrapper>
                    <ProductInfo padding="0">
                      <NameContainer>{item?.name.toLowerCase()}</NameContainer>
                      <PriceContainer>
                        {`# ${item.minPrice} - # ${item.maxPrice} `}
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
                <Link to="/Home" class="nav__link">
                  <HomeIcon />
                  <span class="nav__text">Home</span>
                </Link>
                <Link to="/Buy" class="nav__link">
                  <BuyIcon />
                  <span class="nav__text" style={{ color: "#227EFF" }}>
                    Buy
                  </span>
                </Link>

                <Link to="/Deal" class="nav__link">
                  <DealsIcon />
                  <span class="nav__text">Deals</span>
                </Link>

                <Link to="/Wallet" class="nav__link">
                  <WalletIcon />
                  <span class="nav__text">Wallet</span>
                </Link>

                <Link to="/More" class="nav__link">
                  <MoreIcon />
                  <span class="nav__text">More</span>
                </Link>
              </NavBar>
            </Wrapper>
          </Fragment>
        </Fragment>
      )}
    </Layout>
  );
};

export default Buy;

// const [allProducts, setAllProducts] = useState({});

//   useEffect(() => {
//     dispatch(addData()).then((res) => {
//         res && setAllProducts(res);
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
// }, []);
