import React from 'react';
import { Row, Col, Button, Panel } from 'react-bootstrap';
//import FaArrowDown from 'react-icons/lib/fa/arrow-down';
//import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaPlus from 'react-icons/lib/fa/plus';
import FaMinus from 'react-icons/lib/fa/minus';
import './Skill.css';

class Skill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    {/*const openStyle = {
      float: 'right',
      width: '200%',
      transition: 'width',
      transitionDuration: '346.445ms',
      transitionDelay: '3.5545ms'
    }*/}
    const {name, indeed, twitter, stackOverflow} = this.props.props
    return (
      <div className={this.state.open ? 'openStyle' : 'divStyle'} >
        <Button 
          onClick={ ()=> this.setState({ open: !this.state.open })}
          className='buttonStyle'>
          <h2>{name}</h2>
          <div>
          <p>
            mentions: { indeed + twitter + stackOverflow }
          </p>
          
          <p>
            trending: 
            {/* this.state.trending < 1 ? < FaArrowDown />: <FaArrowUp />*/}
          </p>
          <p className='moreStyle'>
            {this.state.open ?
              <span>less <FaMinus /> </span> : 
              <span>more <FaPlus /></span>  }
          </p>
          </div>
        </Button>
        <Panel 
          collapsible expanded={this.state.open}
          className='panelStyle'>
          <Row></Row>
          <Col xs={12} sm={7}></Col>
          <Col xs={12} sm={5}>
            <h4>Free Resources</h4>
            <ul>
              <li>this resource</li>
              <li>that resource</li>
              <li>new thing</li>
              <li>old stuff</li>
            </ul>
          </Col>
        </Panel>
      </div>
    );
  }
}

export default Skill;