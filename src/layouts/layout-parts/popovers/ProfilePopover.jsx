import { Badge, ButtonBase, styled, useMediaQuery } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import { Small } from "components/Typography";
import { Fragment, useRef } from "react";

const StyledButtonBase = styled(ButtonBase)(({ theme }) => ({
  padding: 5,
  marginLeft: 4,
  borderRadius: 30,
  border: `1px solid ${theme.palette.divider}`,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const ProfilePopover = () => {
  const anchorRef = useRef(null);
  const upSm = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Fragment>
      <StyledButtonBase disableRipple disabled ref={anchorRef}>
        <Badge
          overlap="circular"
          variant="dot"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          sx={{
            alignItems: "center",
            "& .MuiBadge-badge": {
              width: 11,
              height: 11,
              right: "4%",
              borderRadius: "50%",
              border: "2px solid #fff",
              backgroundColor: "success.main",
            },
          }}
        >
          {upSm && (
            <Small mx={1} color="text.secondary">
              Hi,{" "}
              <Small fontWeight="600" display="inline">
                Guest
              </Small>
            </Small>
          )}
          <AppAvatar
            src={"/static/avatar/001-man.svg"}
            sx={{
              width: 28,
              height: 28,
            }}
          />
        </Badge>
      </StyledButtonBase>
    </Fragment>
  );
};

export default ProfilePopover;
