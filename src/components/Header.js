import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { Badge } from "@material-ui/core";

const Header = () => {
  return (
    <div>
      <Container className="container-1">
        <SearchIcon className="search-icon" />
        <input
          className="search-bar"
          type="text"
          placeholder="Search Products"
        />
        <Typography
          variant="h2"
          align="center"
          style={{ marginTop: "-44px", fontWeight: "600" }}
          className="logo"
        >
          KIWU
        </Typography>
        <div
          className="header-logo"
          align="right"
          style={{ marginTop: "-48px" }}
        >
          <IconButton
            className="Icon-btn"
            style={{ color: "#000", backgroundColor: "#fff" }}
          >
            <PersonIcon />
          </IconButton>
          <IconButton
            className="Icon-btn"
            style={{ color: "#000", backgroundColor: "#fff" }}
          >
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton
            className="Icon-btn"
            style={{ color: "#000", backgroundColor: "#fff" }}
          >
            <Badge max={10} badgeContent={2} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </div>
      </Container>
    </div>
  );
};

export default Header;
