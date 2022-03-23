import React, { useEffect, useRef, useState } from "react";
import "../../App.css";
import Banner from "./assets/banner.svg";
import Bg from "./assets/greenBg.jpg";
import Bg2 from "./assets/greenBg2.jpg";
import styled from "styled-components";
import { Button, Flex } from "../../pages/product-details/style";

const backgroundImages = [
  {
    type: Banner,
  },
  {
    type: Bg,
  },
  {
    type: Bg2,
  },
];

const delay = 3000;

const BackgroundItem = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background: ${(props) => `url(${props.imgUrl})`};
`;

const Text = styled.div`
  font-weight: 700;
  color: white;
  font-size: 12px;
  line-height: 18px;
  margin: 7% 0 0 7%;
`;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {backgroundImages.map((item, index) => (
          <BackgroundItem
            className="slide"
            key={index}
            alt=""
            imgUrl={item?.type}
          >
            <div>
              <Flex>
                <Text>
                  Having any <span style={{ color: "coral" }}>issues</span> with
                  <br />
                  your order?
                </Text>
                <div className="button-container">
                  <Button
                    border="none"
                    padding="0px 15px"
                    top="4%"
                    height="35px"
                    size="10px"
                  >
                    Contact Us
                  </Button>
                </div>
              </Flex>
            </div>
          </BackgroundItem>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
