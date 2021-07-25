import styled from "styled-components";

const NoteCard = styled.div.attrs((props) => ({
  color: props.color,
}))`
  background-color: ${(props) => props.color};
  width: 15rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  align-self: start;
  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 14px rgba(0, 0, 0, 0.34);
  }
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
