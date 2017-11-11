import React from 'react'; 
import ReactDOM from 'react-dom';
import Cell from './Cell.jsx'; 

const Row = (props) => {
  return (
    <tbody>
      <tr className='cells'>
        {props.categories.map((el, index) => {
          return <Cell key={index} price={props.prices[0]} category={el} questions={props.questions}></Cell>
        })}
      </tr>
      <tr className='cells'>
        {props.categories.map((el, index) => {
          return <Cell key={index} price={props.prices[1]} category={el} questions={props.questions}></Cell>
        })}
      </tr>
      <tr className='cells'>
        {props.categories.map((el, index) => {
          return <Cell key={index} price={props.prices[2]} category={el} questions={props.questions}></Cell>
        })}
      </tr>
      <tr className='cells'>
        {props.categories.map((el, index) => {
          return <Cell key={index} price={props.prices[3]} category={el} questions={props.questions}></Cell>
        })}
      </tr>
      <tr className='cells'>
        {props.categories.map((el, index) => {
          return <Cell key={index} price={props.prices[4]} category={el} questions={props.questions}></Cell>
        })}
      </tr>
    </tbody>
  )
}

export default Row; 