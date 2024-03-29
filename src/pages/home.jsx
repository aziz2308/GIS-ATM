import { Box } from "@mui/material";
import { H1, H6 } from "components/Typography";
import ContentSlider from "page-section/ContentSlider";

const Home = () => {
  return (
    <Box
      py={4}
      sx={{
        backgroundImage: `url(${require("../assets/uinjkt.jpg")}) `,
        backgroundBlendMode: "lighten",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(5px)",
      }}
    >
      <Box textAlign="left" maxWidth={700} p={5}>
        <H1 fontSize={36} fontWeight={800} lineHeight={1.3}>
          Welcome to our GIS Web for ATMs around UIN Syarif Hidayatullah
        </H1>
        <H6 fontSize={22} py={4} fontWeight={400}>
          Discover the convenience of locating ATMs in and around UIN Syarif
          Hidayatullah. Our GIS platform is designed to make it effortless for
          students and the campus community to find ATMs nearby.
        </H6>
      </Box>

      <ContentSlider />
    </Box>
  );
};

export default Home;
