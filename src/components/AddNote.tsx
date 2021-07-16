import { FC } from "react";
import styled from "styled-components";

interface Props {
  btn: String;
}

const AddNoteBtn = styled.div`
  background-color: #61DBFB;
  color: #282c34;
  border-radius: 3px;
  padding: 5px 15px;
`;

const AddNote: FC<Props> = (props) => {
  return <AddNoteBtn>{props.btn}</AddNoteBtn>;
};

export default AddNote;
