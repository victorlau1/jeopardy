import React from 'react'; 
import ReactDOM from 'react-dom';
import { Table, Modal, Popover, Tooltip, OverlayTrigger, Button } from 'react-bootstrap'; 
import Categories from './components/Categories.jsx'; 
import Row from './components/Row.jsx'; 
import data from '../../database/data.json'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false, 
      prices: ['$200', '$400', '$600', '$800', '$1000'], 
      questions: data,
      categories: ['TELEVISION', 'MUSIC', 'SPORTS', 'MOVIES', 'FOOD', 'TECHNOLOGY', 'NEWS AND POLITICS']
    }
  }
  render () {
    return (
      <div>
        <Table striped hover className="board">
          <Categories categories={this.state.categories}></Categories>
          <Row categories={this.state.categories} prices={this.state.prices} questions={this.state.questions}></Row>
        </Table>
        {data[0].category}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));