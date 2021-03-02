import React from "react";


import {IconButton,Checkbox,ListItemText,ListItem,List } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./body.module.css";
import classNames from "classnames";

const Body = ({ items, deleteItem, getDone }) => {
  return (
    <div>
      <List>
        {items.map((item, index) => (
          <ListItem onClick={() => getDone(item.id)} key={index}>
            <Checkbox
              
              color="default"
              tabIndex={-1}
              checked={!item.done}
              disableRipple
              // onClick={() => getDone(item.id)}
            />
            <ListItemText
              className={!item.done ? styles.disable : ""}
              primary={item.text}
            ></ListItemText>
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteItem(item.id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Body;
