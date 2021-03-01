import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from '@material-ui/icons/Delete';

const Body = ({ items, deleteItem }) => {
  return (
    <div>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <Checkbox tabIndex={-1} disableRipple />
            <ListItemText primary={item.text} />
            <IconButton
              aria-label="Delete"
              onClick={() => {
                deleteItem(item.id);
              }}
            ><DeleteIcon /></IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Body;
