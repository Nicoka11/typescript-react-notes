
const initialNotesState = [
  {
    id: 1,
    title: "Isometric/ 3d Ideas",
    content: `
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
        Medieval`,
    color: "blue",
  },
];

const createNewId = (state) => {
  const maxId = state.reduce((maxId, note) => Math.max(note.id, maxId), -1);
  return maxId + 1;
};

export default function noteReducer(state = initialNotesState, action) {
  switch (action.type) {
    case "notes/noteAdded":
      return [
        ...state,
        {
          id: createNewId(initialNotesState),
          title: action.payload.title,
          content: action.payload.content,
          color: {
            value: action.payload.color,
            default: "white",
          },
        },
    ];
    default:
      return state;
  }
}
