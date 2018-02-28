import React from 'react';

const ClassnotesFoldersItem = (props) => {
  return (
    <li>
      {props.name}
      <br/>
      {props.classnotes}
    </li>
  )
}

export default ClassnotesFoldersItem;