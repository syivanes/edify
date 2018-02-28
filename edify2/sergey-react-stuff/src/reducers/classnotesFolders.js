import {
  ADD_FOLDER,
  ADD_CLASSNOTE
} from '../actions/classnotesFolders';

const initialState = [
  {
    name: "Week 01",
    classnotes: [
      {
        id: 1,
        title: "flexbox tutorial",
        content: "if you like learning through games, play the Flexbox Froggy http://flexboxfroggy.com/"
      },
      {
        id: 3,
        title: "Tuesday live demo",
        content: "you can find code with detailed comments on github"
      }
    ]
  },
  {
    name: "Career Resources",
    classnotes: [
      {
        id: 2,
        title: "resume tips",
        content: "make sure that your resume is not shitty"
      }
    ]
  }
]

const classnotesFolders = (state=initialState, action) => {
  switch (action.type) {
    case ADD_FOLDER:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

export default classnotesFolders;