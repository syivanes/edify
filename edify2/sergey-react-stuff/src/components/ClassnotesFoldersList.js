import React from 'react';
import ClassnotesFoldersItem from './ClassnotesFoldersItem';
import ClassnotesForm from './ClassnotesForm';

class ClassnotesFoldersList extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      newName: '',
      showClassnotesForm: false
    };
  }
  
  render() {
    const classnotesFoldersList = this.props.classnotesFolders.map((c, i) => {
      const classnotesFoldersItemContent = c.classnotes.map((c) => {
        return (
          <div>
            {c.title}
            <br/>
            {c.content}
          </div>
        )
      })
      return (
        <div>
          <ClassnotesFoldersItem
            name={c.name}
            classnotes={classnotesFoldersItemContent}
          />          
          <button onClick={() => {
            this.setState({showClassnotesForm: true})
          }}>
            add a classnote
          </button>
          {this.state.showClassnotesForm ? <ClassnotesForm /> : null}
        </div>
      )

    })
  
    return (
      <div>
        <ul>
          {classnotesFoldersList}
        </ul>

        <input 
          type="text" 
          value={this.state.newName}
          onChange={(event) => {
            const newValue = event.target.value
            this.setState({
              newName: newValue
            })
          }}
        
        />
        <button onClick={() => {
          this.props.add(this.state.newName)
        }}>
        
          Add a folder
        </button>
      </div>
    )
  }
}



export default ClassnotesFoldersList;