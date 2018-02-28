export const ADD_FOLDER = 'ADD_FOLDER';
export const ADD_CLASSNOTE = 'ADD_CLASSNOTE';

export const actionAddFolder = (name) => ({
  type: ADD_FOLDER,
  payload: {
    name, 
    classnotes: []
  }
});

export const actionAddClassnote = (title, content) => ({
  type: ADD_CLASSNOTE,
  payload: {
    title,
    content
  }
})