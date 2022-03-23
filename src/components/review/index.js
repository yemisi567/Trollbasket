import React, { Fragment } from "react";

import styled from "styled-components";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Flex,
  ProductDescription,
  ReviewText,
} from "../../pages/product-details/style";
import { ReactComponent as StarIcon } from "../../pages/product-details/assets/star.svg";
import { ReactComponent as ReviewerIcon } from "../../pages/product-details/assets/reviewr.svg";


const Container = styled.div`
  padding: 20px;
  margin-top: 10px;
`;

const Reviews = () => {
  const params = useParams();
  const allProducts = useSelector((state) => state.products.products);
  const product = allProducts.find((x) => x.id === params.id);

  return (
    <Fragment>
      <ReviewText align="center">Review and Ratings</ReviewText>
      <Container>
        <Flex justify="inherit" padding="0">
          <StarIcon />
          <ReviewText size="12px" margin="-1% 0 0 1%">
            {product?.review}
          </ReviewText>
        </Flex>
        <ProductDescription margin="12px 0 0 0px">
          {product?.comment}
        </ProductDescription>
        <Flex justify="inherit">
          <ReviewerIcon />
          <ReviewText size="12px" margin="3px 0 0 0px">
            {product?.reviewdBy}
          </ReviewText>
        </Flex>
      </Container>
    </Fragment>
  );
};

export default Reviews;
