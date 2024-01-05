import { NewReleases } from "@mui/icons-material";
import {
  Box,
  Card,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { H1, H6, Small, Span } from "components/Typography";
import AppAvatar from "components/avatars/AppAvatar";

const About = () => {
  return (
    <Box py={4}>
      <Box textAlign="center" maxWidth={700} margin="auto">
        <Small letterSpacing={2} fontWeight={500} color="primary.main">
          OUR MISSION
        </Small>

        <H1 fontSize={36} fontWeight={800} lineHeight={1.3}>
          We facilitate students in finding ATMs around UIN Syarif Hidayatullah
        </H1>
        <H6 color="text.secondary" fontSize={22} py={4} fontWeight={400}>
          Our focus is on developing products for{" "}
          <Span fontWeight={600} color="primary.main">
            students and campus community
          </Span>
          , making it easier for them to locate ATMs in the vicinity.
        </H6>
      </Box>

      <Box pt={6}>
        <Grid container spacing={3}>
          {data.map((item, index) => (
            <Grid item md={4} key={index}>
              <ListItem
                sx={{
                  alignItems: "flex-start",
                }}
              >
                <ListItemIcon
                  sx={{
                    padding: 1,
                    borderRadius: 1,
                    backgroundColor: "primary.main",
                  }}
                >
                  <NewReleases
                    sx={{
                      color: "common.white",
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={item.primary}
                  secondary={item.secondary}
                  sx={{
                    marginY: 0,
                    "& .MuiListItemText-primary": {
                      fontSize: 24,
                      color: "text.primary",
                      fontWeight: 600,
                      lineHeight: 1,
                    },
                    "& .MuiListItemText-secondary": {
                      color: "text.primary",
                      fontWeight: 500,
                      paddingTop: 1,
                    },
                  }}
                />
              </ListItem>
            </Grid>
          ))}
        </Grid>

        <Box textAlign="center" maxWidth={700} margin="auto" mt={5}>
          <H1 fontSize={36} fontWeight={800} lineHeight={1.3}>
            PROFILE
          </H1>
        </Box>

        <Grid container spacing={3} mt={5}>
          <Grid item md={4} xs={12}>
            <Card
              sx={{
                padding: 3,
                height: "30vw",
                background: `url(${require("../assets/azis.jpeg")}) center/cover`,
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <H1 color={"white"}>M. Umar Abdul Azis</H1>
                <H1 color={"white"}>11200930000061</H1>
              </Grid>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card
              sx={{
                padding: 3,
                height: "30vw",
                background: `url(${require("../assets/putri.jpeg")}) center/cover`,
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <H1 color={"white"}>Salsabila Tahta Hirani Putri</H1>
                <H1 color={"white"}>11200930000078</H1>
              </Grid>
            </Card>
          </Grid>
          <Grid item md={4} xs={12}>
            <Card
              sx={{
                padding: 3,
                height: "30vw",
                background: `url(${require("../assets/willy.jpeg")}) center/cover`,
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <H1 color={"white"}>Muhammad Willy Wijaya</H1>
                <H1 color={"white"}>11200930000077</H1>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const data = [
  {
    primary: "Easy Access",
    secondary: "Locating and accessing ATMs should be as simple as a few taps.",
  },
  {
    primary: "Campus Convenience",
    secondary:
      "To provide convenience, our site ensures quick access to ATMs around the campus.",
  },
  {
    primary: "Student-Focused",
    secondary:
      "We prioritize a user-friendly experience, specifically tailored for students and the campus community.",
  },
];
export default About;
