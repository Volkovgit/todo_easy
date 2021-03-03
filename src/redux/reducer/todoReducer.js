const ADD_NEW = "ADD NEW";
const DELETE_ITEM = "DELETE_ITEM";
const SWITCH_DONE = "SWITCH_DONE";
const SET_USER_CATEGORY = "SET_USER_CATEGORY";
const ADD_NEW_CATEGORY = "ADD_NEW_CATEGORY"
const CHANGE_TEXT = "CHANGE_TEXT"

const initialState = {
  items: [
    {
      id: 0,
      text: "Купить яблоки",
      date: "228",
      done: false,
      category: "food",
    },
    { id: 1, text: "Купить фарш", date: "1337", done: true, category: "food" },
    {
      id: 2,
      text: "Написать todo приложение",
      date: "1488",
      done: true,
      category: "programming",
    },
    {
      id: 3,
      text: "Поехать на учебу",
      date: "4:20",
      done: false,
      category: "education",
    },
  ],
  categories: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW: {
      let now = new Date().toLocaleDateString();
      debugger;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: state.items[state.items.length - 1].id + 1,
            text: action.placeholder,
            date: now,
            done: true,
            category: action.categ,
          },
        ],
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.placeholder),
      };
    }
    case SWITCH_DONE: {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.placeholder)
            return { ...item, done: !item.done };
          return item;
        }),
      };
    }
    case SET_USER_CATEGORY: {
      let allCategories = [...state.categories];

      state.items.forEach((item) => {
        if (!allCategories.includes(item.category))
          allCategories.push(item.category);
      });
      return {
        ...state,
        categories: [...allCategories]
      }
    }
    case ADD_NEW_CATEGORY:{
      return {...state,categories:[...state.categories,action.placeholder]}
    }
    case CHANGE_TEXT:{
      return{
        ...state,
        items: state.items.map((item)=>{
          if(item.id === action.id) return {...item,text:action.newText}
          return item
        })
      }
    }
    default:
      return state;
  }
};

export const addNew = (text,newCategoryAC) => ({
  type: ADD_NEW,
  placeholder: text,
  categ: newCategoryAC
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  placeholder: id,
});

export const setItemDone = (id) => ({
  type: SWITCH_DONE,
  placeholder: id,
});

export const setUserCategories = () => ({
  type: SET_USER_CATEGORY,
});

export const addNewCategory = (newCategory)=>({
  type: ADD_NEW_CATEGORY,
  placeholder: newCategory
});

export const changeTextCurrentTodo = (id,text)=>({
  type: CHANGE_TEXT,
  id: id,
  newText: text
})

export default todoReducer;
