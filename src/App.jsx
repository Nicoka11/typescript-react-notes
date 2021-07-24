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
  height: 100vh;
  width: 50rem;
`;

function ReactApp() {
  return (
    <AppWrapper>
      <App>
        <AddNote btn="Add a note" />
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
      </App>
    </AppWrapper>
  );
}

export default ReactApp;
