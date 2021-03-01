const ADD_NEW = "ADD NEW";
const DELETE_ITEM = "DELETE_ITEM";
const SWITCH_DONE = "SWITCH_DONE"
const initialState = {
  items: [
    { id: 0, text: "some text1", date: "228", done: false },
    { id: 1, text: "some text2", date: "1337", done: true },
    { id: 2, text: "some text3", date: "1488", done: false },
    { id: 3, text: "some text4", date: "4:20", done: false },
  ],
  text: "asdsf",
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
            done: false,
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
