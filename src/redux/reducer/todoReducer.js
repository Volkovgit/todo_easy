const ADD_NEW = "ADD NEW";
const DELETE_ITEM = "DELETE_ITEM";
const SWITCH_DONE = "SWITCH_DONE"
const initialState = {
  items: [
    { id: 0, text: "Купить яблоки", date: "228", done: false,category:'food' },
    { id: 1, text: "Купить фарш", date: "1337", done: true,category:'food' },
    { id: 2, text: "Написать todo приложение", date: "1488", done: true,category:'programming' },
    { id: 3, text: "Поехать на учебу", date: "4:20", done: false,category:'education' },
  ],

};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW: {
      let now = new Date().toLocaleDateString();
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: state.items[state.items.length - 1].id + 1,
            text: action.placeholder,
            date: now,
            done: true,
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
    case SWITCH_DONE:{
      return{
        ...state,
        items: state.items.map((item)=>{
          if(item.id === action.placeholder) return {...item,done:!item.done}
          return item
        })
      }
    }
    default:
      return state;
  }
};

export const addNew = (text) => ({
  type: ADD_NEW,
  placeholder: text,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  placeholder: id,
});

export const setItemDone = (id)=>({
  type:SWITCH_DONE,
  placeholder: id
})


export default todoReducer;
