import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./body.module.css";
import classNames from 'classnames'

const Body = ({ items, deleteItem,getDone }) => {
  return (
    <div>
      <List>
        {items.map((item, index) => (
          <ListItem onClick={() => getDone(item.id)} key={index}>
            {/* <Checkbox
              tabIndex={-1}
              disableRipple
              onClick={() => getDone(item.id)}
            /> */}
            <ListItemText
              className={!item.done ? styles.disable : ''}
              primary={item.text}
            />
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
