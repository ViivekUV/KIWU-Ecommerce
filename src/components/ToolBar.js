import React from "react";
import { MenuIcon } from "@material-ui/icons/Menu";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  colors,
} from "@material-ui/core";

const ToolBar = () => {
  return (
    <div>
      <AppBar position="sticky" style={{ backgroundColor: colors.brown[500] }}>
        <ToolBar>
          <IconButton style={{ color: colors.teal[100] }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGlow: 1 }}>
            This is heading
          </Typography>
          <Button style={{ color: colors.teal[100] }}>Sign In</Button>
        </ToolBar>
      </AppBar>
    </div>
  );
};

export default ToolBar;
