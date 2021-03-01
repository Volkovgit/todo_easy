import React from "react";
import { TextField } from "@material-ui/core";
const Header = ({ findBySearch }) => {
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
          color="normal"
          inputRef={newSearchText}
          // value={text}
          onChange={(event) => onChangeInputField(event.target.value)}
        />
      </form>
    </div>
  );
};

export default Header;
