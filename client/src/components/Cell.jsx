import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Question from './Question.jsx'; 

class Cell extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      show: false, 
      value: this.props.price, 
      questions: JSON.parse(JSON.stringify(this.props.questions)), 
      question: ''
    }
    this.close = this.close.bind(this); 
    this.open = this.open.bind(this); 
    this.pickQuestion = this.pickQuestion.bind(this); 
  }
  getInitialState() {
    return {show: false}; 
  }
  close() {
    this.setState({
      show: false, 
      value: ''
    });
  }
  open() {
    this.pickQuestion(this.props.category, this.props.price);
    this.setState({show: true}); 
  }
  pickQuestion(category, price) {
    for (var x = 0; x < this.state.questions.length; x += 1) {
      if (this.state.questions[x].category === category && this.state.questions[x].price === price) {
        this.setState({question: this.state.questions[x].question})
      }
    }
  }
  render() {
    return (
      <td onClick={this.open}>
        {this.state.value}
        <span><Question show={this.state.show} onHide={this.close} thequestion={this.state.question}></Question></span>
      </td>
      
    )
  }
}

export default Cell;  