import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Modal, Popover, Tooltip, OverlayTrigger, Button } from 'react-bootstrap'; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.close = this.close.bind(this); 
    this.open = this.open.bind(this); 
  }

  close() {
    this.setState({showModal: false}); 
  }
  open() {
    this.setState({showModal: true}); 
  }
  render () {
    const popover = (
      <Popover id="modal-popover" title="popover">
        testy mcfucker testerson
      </Popover>
    ); 
    const tooltip = (
      <Tooltip id="modal-tooltip">
        boo
      </Tooltip>
    ); 
    return (
      <div>
        <Table striped hover className="board">
          <thead>
            <tr className="heading">
              <th>TELEVISION</th>
              <th>MUSIC</th>
              <th>SPORTS</th>
              <th>MOVIES</th>
              <th>FOOD</th>
              <th>NEWS AND POLITICS</th>
            </tr>
          </thead>
          <tbody>
            <tr className='cells'>
              <td onClick={this.open}>$200</td>
              <td>$200</td>
              <td>$200</td>
              <td>$200</td>
              <td>$200</td>
              <td>$200</td>
            </tr>
            <tr className='cells'>
              <td>$400</td>
              <td>$400</td>
              <td>$400</td>
              <td>$400</td>
              <td>$400</td>
              <td>$400</td>
            </tr>
            <tr className='cells' >
              <td>$600</td>
              <td>$600</td>
              <td>$600</td>
              <td>$600</td>
              <td>$600</td>
              <td>$600</td>
            </tr>
            <tr className='cells'>
              <td>$800</td>
              <td>$800</td>
              <td>$800</td>
              <td>$800</td>
              <td>$800</td>
              <td>$800</td>
            </tr>
            <tr className='cells'>
              <td>$1000</td>
              <td>$1000</td>
              <td>$1000</td>
              <td>$1000</td>
              <td>$1000</td>
              <td>$1000</td>
            </tr>
          </tbody>
        </Table>
        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Text in a modal</h4>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

            <h4>Popover in a modal</h4>
            <p>there is a <OverlayTrigger overlay={popover}><a href="#">popover</a></OverlayTrigger> here</p>

            <h4>Tooltips in a modal</h4>
            <p>there is a <OverlayTrigger overlay={tooltip}><a href="#">tooltip</a></OverlayTrigger> here</p>

            <hr />

            <h4>Overflowing text to show scroll behavior</h4>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
            <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
            <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));