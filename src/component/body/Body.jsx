import React from "react";

import {
  IconButton,
  Checkbox,
  ListItemText,
  ListItem,
  List,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import styles from "./body.module.css";
import SimpleCard from "../Card/card";
import {useDispatch } from "react-redux";
import {changeTextCurrentTodo as changeText } from "../../redux/reducer/todoReducer";

const Body = ({ items, deleteItem, getDone }) => {
  const dispatch = useDispatch();
  const [isOpenCard, setIsOpenCard] = React.useState(false);
  const [currentTodoItem, setCurrentTodoItem] = React.useState({});
  const openCard = (item) => {
    setCurrentTodoItem(item);
    // console.log(item);
    setIsOpenCard(!isOpenCard);
  };

  const changeTextInTodo = (id,text)=>{
    dispatch(changeText(id,text))
  }
  return (
    <div>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <Checkbox
              color="default"
              tabIndex={-1}
              checked={!item.done}
              disableRipple
              onClick={() => getDone(item.id)}
            />

            <Button onClick={() => openCard(item)}>
              <ListItemText
                className={!item.done ? styles.disable : ""}
                primary={item.text}
              ></ListItemText>
            </Button>

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
      {isOpenCard && (
        <SimpleCard changeText={changeTextInTodo} currentTodo={currentTodoItem} openCard={openCard} />
      )}
    </div>
  );
};

export default Body;
