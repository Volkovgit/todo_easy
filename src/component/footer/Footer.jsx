import React from "react";
import { useDispatch } from "react-redux";
import { TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

const Footer = ({ addNewItem }) => {
  const [newText, setNewText] = React.useState("");

  const addNewTodo = (text) => {
    addNewItem(text);
    setNewText("");
  };
  return (
    <div>
      <div>
        <TextField
          variant="outlined"
          placeholder="Add"
          margin="normal"
          color="normal"
          value={newText}
          onChange={(e) => setNewText(e.currentTarget.value)}
        />
        <IconButton
          aria-label="Add"
          onClick={() => {
            addNewTodo(newText);
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
