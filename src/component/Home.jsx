import React from "react";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import style from "../app.module.css";
import Header from "./header/Header";
import { useSelector, useDispatch } from "react-redux";
import { addNew, deleteItem, setItemDone } from "../redux/reducer/todoReducer";

function Home() {
  const todoItems = useSelector(({ todoItems }) => todoItems.items);
  const dispatch = useDispatch();

  const [textBySearch, setTextBySearch] = React.useState("");

  let data = React.useMemo(
    () => todoItems.filter((item) => item.text.includes(textBySearch)),
    [todoItems, textBySearch]
  );

  const findBySearch = (text) => {
    setTextBySearch(text);
  };

  const addTodo = (text) => {
    if (text) {
      dispatch(addNew(text));
    }
  };

  const deleteTodoItem = (id) => {
    dispatch(deleteItem(id));
  };

  const switchItemDone = (id) => {
    dispatch(setItemDone(id));
  };

  return (
    <div>
      <div className={style.app}>
        <div className={style.header}>
          <Header findBySearch={findBySearch} />
        </div>
        <div className={style.body}>
          <Body
            items={data}
            deleteItem={deleteTodoItem}
            getDone={switchItemDone}
          />
        </div>
        <div className={style.footer}>
          <Footer addNewItem={addTodo} />
        </div>
      </div>
    </div>
  );
}

export default Home;
