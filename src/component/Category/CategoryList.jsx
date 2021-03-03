import React from "react";
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  TextField,
  AddIcon,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./category.module.css";
import Body from "../body/Body";
import Footer from "../footer/Footer";

function CategoryList({
  categories,
  todoItems,
  switchCurrentCategory,
  currentCategory,
  addCategory,
  ...props
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [newCategory, setNewCategory] = React.useState("");
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const addNewCategory = (text)=>{
    addCategory(text);
    setNewCategory('');
  }

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
          <div className={styles.inputNewCategory}>
            <TextField
              value={newCategory}
              onChange={(e) => setNewCategory(e.currentTarget.value)}
            ></TextField>
            <Button
              variant="contained"
              onClick={() => {
                addNewCategory(newCategory);
              }}
            >
              Add Category
            </Button>
          </div>

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
                    switchCurrentCategory(cat);
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
      <Body
        items={todoItems}
        deleteItem={props.deleteItem}
        getDone={props.getDone}
      />
      {currentCategory ? <div><Footer addNewItem={props.addNewByCategory} currentCategory={currentCategory}/></div> : ""}
    </div>
  );
}

export default CategoryList;
