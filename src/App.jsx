import styled from "styled-components";
import colorPalette from "./assets/colorPalette.js";

import AddNote from "./components/AddNote";
import Note from "./components/Note";

const AppWrapper = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: center;
  background: ${colorPalette.RaisinBlack};
`;

const App = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 90rem;
`;

const AllNotesWrapper = styled.section`
  width: 100%;
  background-color: blue;
  margin-top: 3rem;
`;

function ReactApp() {
  return (
    <AppWrapper>
      <App>
        <AddNote btn="Add a note" />
        <AllNotesWrapper>
          <Note
            title="This is the title"
            content="
        Studio Photo
        Bureau
        House
        Montagnes
        Arret de Metro ☑️
        Salle de bain
        City 
        Park 
        Cyberpunk Bar
        American 80s Bar (Insidoe/Outside) ☑️
        Cyberpunk Room (w/ a floating bed)
        Village
        Factory
        Ville/Maison/Temple du Japon
        Medieval"
            color={colorPalette.BananaMania}
          />
        </AllNotesWrapper>
      </App>
    </AppWrapper>
  );
}

export default ReactApp;
