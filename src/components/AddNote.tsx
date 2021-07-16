import { FC } from "react";
import styled from "styled-components";

interface Props {
  btn: String;
}

const InputCreateNote = styled.input.attrs({
  type: "text",
  placeholder: "Create a note...",
})`
  padding: 10px 15px;
  width: 100%;
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

const AddNote: FC<Props> = (props) => {
  return (
    <div>
      <InputCreateNote />
    </div>
  );
};

export default AddNote;
