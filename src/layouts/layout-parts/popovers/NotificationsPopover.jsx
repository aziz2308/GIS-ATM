import { Badge, IconButton, styled } from "@mui/material";
import NotificationsIcon from "icons/NotificationsIcon";
import { Fragment, useRef } from "react";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const NotificationsPopover = () => {
  const anchorRef = useRef(null);

  return (
    <Fragment>
      <StyledIconButton ref={anchorRef}>
        <Badge color="error" badgeContent={0}>
          <NotificationsIcon
            sx={{
              color: "text.disabled",
            }}
          />
        </Badge>
      </StyledIconButton>
    </Fragment>
  );
};

export default NotificationsPopover;
