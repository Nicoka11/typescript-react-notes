import { FC } from "react";
import styled from "styled-components";
import { useState } from "react";

const InputCreateNote = styled.input.attrs({
  type: "text",
  placeholder: "Create a note...",
})`
  padding: 10px 15px;
  width: 10rem;
  background-color: transparent;
  color: white;
  font-size: 15px;
  border: 2px solid white;
  border-radius: 5px;
  outline: none;

  &::placeholder {
    opacity: 70%;
    color: white;
  }
`;

const InputCreateNote2 = styled.input.attrs({
  type: "text",
  placeholder: "Create a note...",
})`
  padding: 10px 15px;
  background-color: white;
  font-size: 15px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 8px 11px rgba(0, 0, 0, 0.1);
  outline: none;
  width: 100%;

  &::placeholder {
    opacity: 70%;
    color: black;
  }
`;

const NewNote = styled.div`
  width: 50rem;
  background: red;
`;

interface Props {
  btn: String;
}

const AddNote: FC<Props> = (props) => {
  const [state, setState] = useState({
    search: "",
    focused: false,
  });

  const createNoteFocusHandler = () => {
    setState((prevState) => ({ ...prevState, focused: !state.focused }));
    console.log("Here is the new state 🔵", state);
  };

  return (
    <div>
      <NewNote>
        <InputCreateNote2
          onChange={(e) => {
            setState((prevState) => ({ ...prevState, search: e.target.value }));
          }}
          onFocus={createNoteFocusHandler}
        />
      </NewNote>
      <p>{state.search}</p>
    </div>
  );
};

export default AddNote;
