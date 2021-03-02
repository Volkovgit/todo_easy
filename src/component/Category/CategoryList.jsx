import React from "react";
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./category.module.css";
import Body from "../body/Body";



function CategoryList({ categories, todoItems,newCategory,currentCategory,...props }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.category}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{currentCategory}</Typography>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {categories.map((cat) => (
              <div>
                <MenuItem
                  onClick={() => {
                    newCategory(cat)
                    handleClose();
                  }}
                >
                  {cat}
                </MenuItem>
                <br />
              </div>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
      <Body items={todoItems} deleteItem={props.deleteItem} getDone={props.getDone}/>
    </div>
  );
}

export default CategoryList;