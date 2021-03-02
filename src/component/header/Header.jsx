import React from "react";
import { TextField,Button } from "@material-ui/core";
const Header = ({ findBySearch,setFilter }) => {
  let newSearchText = React.createRef();

  const onChangeInputField = (event) => {
    findBySearch(newSearchText.current.value);
  };
  return (
    <div>
      <form>
        <TextField
          variant="outlined"
          placeholder="Find"
          margin="normal"
          
          inputRef={newSearchText}
          // value={text}
          onChange={(event) => onChangeInputField(event.target.value)}
        />
      </form>
      <Button variant="contained" onClick={()=>setFilter(null)}>All</Button>
      <Button variant="contained" onClick={()=>setFilter(false)}>Completed</Button>
      <Button variant="contained" onClick={()=>setFilter(true)}>Not Done</Button>
    </div>
  );
};

export default Header;
