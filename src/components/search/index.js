import React, { Fragment, useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../layout/layout";
import { ReactComponent as WalletIcon } from "./assets/wallet.svg";
import { ReactComponent as BuyIcon } from "./assets/buy.svg";
import { ReactComponent as HomeIcon } from "./assets/home.svg";
import { ReactComponent as DealsIcon } from "./assets/deals.svg";
import { ReactComponent as MoreIcon } from "./assets/more.svg";

import {
  Container,
  GridBox,
  GridItem,
  ImageWrapper,
  PriceContainer,
  ProductImage,
  ProductInfo,
  NameContainer,
  Wrapper,
  NavBar,
} from "../../pages/buy/style";

import { products } from "../../data/productData";
import { addProducts } from "../../redux/products/slice";
import { Search } from "../../pages/buy/search";
import { Header } from "../header";

const SearchPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [searchedOptions, setSearchedOptions] = useState(products);

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

  return (
    <Layout>
      <Fragment>
        <Header title={"Search Products"} />
        <Container top="0px" bottom="150px">
          <Search
            top="10px"
            placeholder={"Search Merchbuy"}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <GridBox>
            {searchedOptions.map((item, index) => (
              <div key={index}>
                <GridItem radius={"8px"}>
                  <ImageWrapper
                    justifyContent="center"
                    onClick={() => {
                      navigate("products/" + item.id);
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

export default SearchPage;
