import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './App.css';
import 'react-bootstrap';
import Skill from './Skill';
import data from './data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      skills: data
    } 
  }
  render() {
    return (
      <div className="App">
        <header className="dark-primary-color text-primary-color">
          <h1><a href="/">DevSkills</a></h1>
          <h4>Date</h4>
          <h3><a href="#" target="_blank">API</a></h3>
        </header>
        <main>
        <Row>
          <Col xs={ 12 } sm={ 8 }>
            
            
          </Col> 
          <Col xs={ 12 } sm={ 4 }>
          {this.state.skills[0].map((skill, i) =>{
            return (
            <Skill 
              key={ i }
              skill={ skill }/>
            )
          })}
          </Col> 
        </Row>
        </main>
      </div>
    );
  }
}

export default App;
