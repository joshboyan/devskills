import React, { Component } from 'react';
import { Row, Col, Button, Panel } from 'react-bootstrap';
//import FaArrowDown from 'react-icons/lib/fa/arrow-down';
//import FaArrowUp from 'react-icons/lib/fa/arrow-up';
import FaPlus from 'react-icons/lib/fa/plus';
import FaMinus from 'react-icons/lib/fa/minus';
import './Skill.css';
import axios from 'axios';
import SkillChart from './SkillChart';

export default class Skill extends Component {
  state = {
    open: false,
    results: []
  };
    
  handleClick = () => {
    this.setState({ open: !this.state.open })
    axios.get(`https://devskills-api.herokuapp.com/api/skill/${this.props.skill.name}?key=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.Impvc2gxMSI.3I3e5kumdTCtVDTXkCLdh1WQGZGzkmIRhl7EPa4mirc`)
      .then( results => {
        const formattedData = results.data.map((elem, i) => {
          elem.index = i;
          return elem;
        })
        this.setState({
          results: formattedData
        });
      }).catch( err => {
        console.error(err);
      });
  }

  render() {
    const {
      name, 
      indeed, 
      twitter, 
      stackOverflow } = this.props.skill

    const { open, results } = this.state

    return (
      <div className={open ? 'openStyle' : 'divStyle'} >
        <Button 
          onClick={ () => this.handleClick() }
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
            {
              open ?
                <span>less <FaMinus /> </span> : 
                <span>more <FaPlus /></span>  
            }
          </p>
          </div>
        </Button>
        <Panel 
          collapsible expanded={open} 
          onClick={ ()=> this.handleClick() }
          className='panelStyle'>
          <Row>
          <Col xs={12} sm={7}>
            {
              results.length > 0 && <SkillChart chartData={ results }/>
            }
          </Col>
          <Col xs={12} sm={5}>
            <h4>Free Resources</h4>
            <ul>
              <li>this resource</li>
              <li>that resource</li>
              <li>new thing</li>
              <li>old stuff</li>
            </ul>
          </Col>
          </Row>
        </Panel>
      </div>
    );
  }
}