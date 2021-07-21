// @ts-nocheck

import { FC } from "react";
import styled from "styled-components";
import { useState } from "react";

// const InputCreateNote = styled.input.attrs({
//   type: "text",
//   placeholder: "Create a note...",
// })`
//   padding: 10px 15px;
//   width: 10rem;
//   background-color: transparent;
//   color: white;
//   font-size: 15px;
//   border: 2px solid white;
//   border-radius: 5px;
//   outline: none;

//   &::placeholder {
//     opacity: 70%;
//     color: white;
//   }
// `;

const NewNote = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  background: red;
  border-radius: 3px;
  overflow: hidden;
`;

const InputCreateTitle = styled.input.attrs({
  type: "text",
  placeholder: "Create a note...",
})`
  padding: 10px 15px;
  background-color: white;
  font-size: 15px;
  border: none;
  box-shadow: 0 8px 11px rgba(0, 0, 0, 0.1);
  outline: none;

  font-weight: ${(props: any) => (props.focused ? "bold" : "normal")};

  &::placeholder {
    opacity: 70%;
    color: black;
  }
`;

const InputCreateNote = styled.input.attrs({
  type: "text",
  placeholder: "Write your note...",
})`
  padding: 10px 15px;
  background-color: white;
  font-size: 15px;
  border: none;
  box-shadow: 0 8px 11px rgba(0, 0, 0, 0.1);
  outline: none;

  &::placeholder {
    opacity: 70%;
    color: black;
  }
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
    console.log(InputCreateTitle.componentStyle);
  };

  return (
    <div>
      <NewNote>
        <InputCreateTitle
          onChange={(e) => {
            setState((prevState) => ({ ...prevState, search: e.target.value }));
          }}
          onFocus={createNoteFocusHandler}
          focused={state.focused}
        />
        {state.focused && <InputCreateNote />}
      </NewNote>
      <p>{state.search}</p>
    </div>
  );
};

export default AddNote;
