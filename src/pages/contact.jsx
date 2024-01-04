import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Card, Grid } from "@mui/material";
import { H1, H2, H6, Small } from "components/Typography";
import ProfileIcon from "icons/ProfileIcon";
import Instagram from "icons/Instagram";
import Whatsapp from "icons/Whatsapp";
import Messenger from "icons/Messenger";

const Contact = () => {
  return (
    <Box py={4}>
      <Box textAlign="center" pb={10}>
        <H1 fontSize={24} fontWeight={700}>
          Our teams are here to help
        </H1>
        <H6 color="text.secondary" fontWeight={500}>
          Get in touch and let us know how we can help.
        </H6>
      </Box>

      <Box>
        <Grid container spacing={3}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card
              sx={{
                padding: 4,
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  padding: 2,
                  margin: "auto",
                  display: "flex",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ProfileIcon
                  sx={{
                    color: "primary.main",
                  }}
                />
              </Box>

              <H2 fontWeight={500} py={1}>
                Email
              </H2>
              <Small>We're here to help with any question!</Small>

              <Box paddingTop={5}>
                <Button
                  fullWidth
                  variant="outlined"
                  endIcon={<ArrowForward fontSize="large" />}
                >
                  Send Email
                </Button>
              </Box>
            </Card>
          </Grid>

          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card
              sx={{
                padding: 4,
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  padding: 2,
                  margin: "auto",
                  display: "flex",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Instagram
                  sx={{
                    color: "primary.main",
                  }}
                />
              </Box>

              <H2 fontWeight={500} py={1}>
                Instagram
              </H2>
              <Small>We're here to help with any question!</Small>

              <Box paddingTop={5}>
                <Button
                  fullWidth
                  variant="outlined"
                  endIcon={<ArrowForward fontSize="large" />}
                >
                  Send DM
                </Button>
              </Box>
            </Card>
          </Grid>

          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card
              sx={{
                padding: 4,
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  padding: 2,
                  margin: "auto",
                  display: "flex",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Whatsapp
                  sx={{
                    color: "primary.main",
                  }}
                />
              </Box>

              <H2 fontWeight={500} py={1}>
                Whatsapp
              </H2>
              <Small>We're here to help with any question!</Small>

              <Box paddingTop={5}>
                <Button
                  fullWidth
                  variant="outlined"
                  endIcon={<ArrowForward fontSize="large" />}
                >
                  Send Whatsapp
                </Button>
              </Box>
            </Card>
          </Grid>

          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Card
              sx={{
                padding: 4,
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  width: 60,
                  height: 60,
                  padding: 2,
                  margin: "auto",
                  display: "flex",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Messenger
                  sx={{
                    color: "primary.main",
                  }}
                />
              </Box>

              <H2 fontWeight={500} py={1}>
                Messenger
              </H2>
              <Small>We're here to help with any question!</Small>

              <Box paddingTop={5}>
                <Button
                  fullWidth
                  variant="outlined"
                  endIcon={<ArrowForward fontSize="large" />}
                >
                  Send Messenger
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
