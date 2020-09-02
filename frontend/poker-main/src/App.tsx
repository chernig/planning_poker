import React from 'react';
import { Jumbotron, Col } from 'react-bootstrap'
import './App.css';
import StoryContainer from './components/storyContainer/storyContainer'



function App() {
  return (
    <div className="App">
      <Jumbotron className='m-0'>
      <Col md={{ span: 4, offset: 8 }}>
        <StoryContainer/>
      </Col>
      </Jumbotron>
    </div>
  );
}

export default App;


