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
  width: 100%;
  background-color: white;
  color: white;
  font-size: 15px;
  border: none;
  border-radius: 3px;
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
  const [search, setSearch] = useState("");
  return (
    <div>
      <InputCreateNote2
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <p>{search}</p>
    </div>
  );
};

export default AddNote;
