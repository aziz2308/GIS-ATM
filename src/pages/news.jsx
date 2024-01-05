import { NewReleases } from "@mui/icons-material";
import {
  Box,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
} from "@mui/material";
import { H1, H6, Small, Span } from "components/Typography";

const News = () => {
  return (
    <Box py={4}>
      <Box textAlign="center" maxWidth={700} margin="auto">
        <H1 fontSize={36} fontWeight={800} lineHeight={1.3}>
          NEWS
        </H1>
        <H6 color="text.secondary" fontSize={22} py={4} fontWeight={400}>
          Transaksi ATM Mulai Menyusut, Bagaimana Nasib Mesin ATM Bank Mandiri?
        </H6>
      </Box>

      <Box pt={6}>
        <Grid container spacing={3}>
          {data.map((item, index) => (
            <Grid item md={4} key={index}>
              <Card
                p={5}
                sx={{
                  background: "paper",
                }}
              >
                <ListItem
                  p={3}
                  sx={{
                    alignItems: "flex-start",
                  }}
                >
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const data = [
  {
    primary: "Berita 1",
    secondary: "Description",
  },
  {
    primary: "Berita 2",
    secondary: "Description",
  },
  {
    primary: "Berita 3",
    secondary: "Description",
  },
];
export default News;
