import styled from "styled-components";

const NoteCard = styled.div.attrs((props) => ({
  color: props.color,
}))`
  background-color: ${(props) => props.color};
  width: 15rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;

const Note = (props) => {
  return (
    <NoteCard color={props.color}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </NoteCard>
  );
};

export default Note;
