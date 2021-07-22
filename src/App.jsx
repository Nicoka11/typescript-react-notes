import AddNote from "./components/AddNote";
import styled from "styled-components";
import colorPalette from "./assets/colorPalette.js";

const AppWrapper = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  background: ${colorPalette.RaisinBlack};
`;

const App = styled.div`
  height: 100vh;
  width: 50rem;
`;

function ReactApp() {
  return (
    <AppWrapper>
      <App>
        <AddNote btn="Add a note" />
      </App>
    </AppWrapper>
  );
}

export default ReactApp;
