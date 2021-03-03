import React from "react";
import styles from "./card.module.css";
import { TextField, Button } from "@material-ui/core";

export default function SimpleCard({ changeText,openCard, currentTodo }) {
  const [todoText, setTodoText] = React.useState(currentTodo.text);

  const setNewText = () => {
    changeText(currentTodo.id,todoText)
  };

  return (
    <div className={styles.popup_box}>
      <div className={styles.box}>
        <span className={styles.close_icon} onClick={() => openCard()}>
          x
        </span>
        <form className={styles.formInput}>
          <TextField
            classes={{ root: styles.formInput }}
            label="Текст задачи"
            onChange={(e) => setTodoText(e.currentTarget.value)}
            value={todoText}
          ></TextField>
          <Button variant="contained" color="primary"
          onClick={()=>setNewText()}>
            Accept
          </Button>
        </form>
      </div>
    </div>
  );
}
