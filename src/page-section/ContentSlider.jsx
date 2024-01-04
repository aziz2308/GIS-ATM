import { styled } from "@mui/material";
import { Box } from "@mui/system";
import { H1, Paragraph } from "components/Typography";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React from "react";
const StyledProvider = styled(CarouselProvider)(({ theme }) => ({
  outline: 0,
  padding: 24,
  height: "100%",
  display: "flex",
  overflow: "hidden",
  position: "relative",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",

  "& .focusRing___1airF.carousel__slide-focus-ring": {
    outline: "none !important",
  },
}));

const ContentSlider = () => {
  return (
    <StyledProvider
      isPlaying
      totalSlides={3}
      naturalSlideWidth={100}
      naturalSlideHeight={125}
      currentSlide={1}
      isIntrinsicHeight
      dragEnabled={false}
    >
      <Slider>
        <Slide index={0}>
          <SlideComponent
            img="/static/illustration/login-2.svg"
            title="Easy ATM Discovery"
            descripiton="Effortlessly discover ATMs around UIN Syarif Hidayatullah with our user-friendly GIS platform."
          />
        </Slide>
        <Slide index={1}>
          <SlideComponent
            img="/static/illustration/login-1.svg"
            title="Campus-Focused"
            descripiton="Designed specifically for students and the campus community, ensuring convenience in every search."
          />
        </Slide>
        <Slide index={2}>
          <SlideComponent
            img="/static/illustration/login-3.svg"
            title="Quick and Accessible"
            descripiton="Our platform provides quick and accessible information, making it easy for you to find the nearest ATMs."
          />
        </Slide>
      </Slider>
    </StyledProvider>
  );
};

export default ContentSlider;

function SlideComponent({ img, title, descripiton }) {
  return (
    <Box
      sx={{
        padding: 4,
        textAlign: "right",
      }}
    >
      <img
        alt="slide"
        src={img}
        style={{
          maxWidth: 300,
        }}
      />
      <H1 fontWeight={700} mt={3}>
        {title}
      </H1>
      <Paragraph>{descripiton}</Paragraph>
    </Box>
  );
}
