const ADD_NEW = "ADD NEW";
const DELETE_ITEM = "DELETE_ITEM";
const FIND_ITEMS = "FIND_ITEMS";
const initialState = {
  items: [
    { id: 0, text: "some text1", date: "228", done: false },
    { id: 1, text: "some text2", date: "1337", done: false },
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
        items: state.items.filter((item) => item.id != action.placeholder),
      };
    }
    case FIND_ITEMS: {
      debugger;
      if (action.placeholder != "") {
        return {
          ...state,
          items: state.items.filter((item) =>
            item.text.includes(action.placeholder)
          ),
        };
      }
      return state;
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

export const filterItem = (text) => ({
  type: FIND_ITEMS,
  placeholder: text,
});

export default todoReducer;
