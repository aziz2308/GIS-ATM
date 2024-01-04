import { Box, IconButton, styled } from "@mui/material";
import { useRef } from "react";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));
const IconWrapper = styled(Box)(() => ({
  display: "flex",
  height: 24,
  width: 24,
  padding: "2px",
  "& img": {
    width: "100%",
    borderRadius: "50%",
    objectFit: "cover",
  },
}));

const LanguagePopover = () => {
  const anchorRef = useRef(null);

  return (
    <>
      <StyledIconButton ref={anchorRef}>
        <IconWrapper>
          <img alt={"flag"} src={"/static/flags/idn.png"} />
        </IconWrapper>
      </StyledIconButton>
    </>
  );
};

export default LanguagePopover;
