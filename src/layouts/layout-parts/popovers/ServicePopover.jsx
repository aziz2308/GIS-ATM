import { Apps } from "@mui/icons-material";
import { Badge, styled, IconButton } from "@mui/material";
import { Fragment, useRef } from "react";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const ServicePopover = () => {
  const anchorRef = useRef(null);
  return (
    <Fragment>
      <StyledIconButton ref={anchorRef}>
        <Badge color="error" badgeContent={0}>
          <Apps
            sx={{
              color: "text.disabled",
            }}
          />
        </Badge>
      </StyledIconButton>
    </Fragment>
  );
};

export default ServicePopover;
