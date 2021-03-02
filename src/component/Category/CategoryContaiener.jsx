import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CategoryList from "./CategoryList";
import {
  addNew,
  deleteItem,
  setItemDone,
} from "../../redux/reducer/todoReducer";
function CategoryContaiener() {
  const todoItems = useSelector(({ todoItems }) => todoItems.items);
  const [currentCategory, setCurrentCategory] = React.useState(null);
  const dispatch = useDispatch();
  let userCategory = [];

  const getAllUserCategory = () => {
    todoItems.forEach((item) => {
      if (!userCategory.includes(item.category))
        userCategory.push(item.category);
    });
  };
  getAllUserCategory();

  let data = React.useMemo(
    () =>
      todoItems.filter((item) => {
        if (currentCategory == null) return null;
        return item.category == currentCategory;
      }),
    [todoItems, currentCategory]
  );

  const switchCurrentCategory = (newCategory) => {
    setCurrentCategory(newCategory);
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
      <CategoryList
        categories={userCategory}
        todoItems={data}
        newCategory={switchCurrentCategory}
        currentCategory={currentCategory}
        deleteItem={deleteTodoItem}
        getDone={switchItemDone}
      />
    </div>
  );
}

export default CategoryContaiener;
