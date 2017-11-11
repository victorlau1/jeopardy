import React from 'react'; 
import ReactDOM from 'react-dom'; 


const Categories = (props) => {
  return (
    <thead>
      <tr className="heading">
        {props.categories.map((cat, index) => {
          return <th key={index}>{cat}</th>
        })}
      </tr>
    </thead>
  )
}

export default Categories; 