import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CategoryList from "./CategoryList";
import {
  addNew,
  deleteItem,
  setItemDone,
  setUserCategories
} from "../../redux/reducer/todoReducer";
function CategoryContaiener() {
  const todoItems = useSelector(({ todoItems }) => todoItems.items);
  const [currentCategory, setCurrentCategory] = React.useState(null);
  const dispatch = useDispatch();
  
  React.useEffect(()=>{
    dispatch(setUserCategories());
  },[])
  const categoryItems = useSelector(({ todoItems }) => todoItems.categories);


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


  const setUserCategory =()=>{
    console.log('test');
  }
  

  return (
    <div>
      <CategoryList
        categories={categoryItems}
        todoItems={data}
        newCategory={switchCurrentCategory}
        currentCategory={currentCategory}
        deleteItem={deleteTodoItem}
        getDone={switchItemDone}
        addCategory={setUserCategory}
      />
    </div>
  );
}

export default CategoryContaiener;
