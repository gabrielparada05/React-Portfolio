import React from 'react';
import Bill from '../images/bill.jpg';
import Password from '../images/password.jpg';
import Weather from '../images/weather.jpg';
import Word from '../images/word.jpg';
import Quiz from '../images/quiz.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




console.log(Bill);
console.log(Password);
console.log(Weather);
console.log(Word)
console.log(Quiz)

export default function Projects() {
  return (

    <Container>
      <Row>
        <Col>
        <div className="card1">
          <a href="https://s2robertson-payment-tracker-2c1497a835bb.herokuapp.com/">
            <div className="title">
              <h3>Payment Tracker</h3>
              <p>MVC</p>
            </div>
            <div>
              <img src={Bill} alt="A dollar bill" />
            </div>
          </a>
        </div>
        </Col>

        <Col>
          <div className="card1">
            <a href="https://gabrielparada05.github.io/Password-generator-C3-UofT/">

              <div className="title">
                <h3>Password Generator</h3>
                <p>HTML/Javascript</p>
              </div>
              <div>
                <img src={Password} alt="Password word" />
              </div>
            </a>
          </div>
       </Col>
      </Row>
      <Row>
        <Col> <a href="https://gabrielparada05.github.io/Code-Quiz-C4/">
          <div className="container">
            <div className="title">
              <h3>Code Quiz</h3>
              <p>JavaScript/CSS</p>
            </div>
            <div>
              <img src={Quiz} alt="A person working in a computer" />
            </div>
          </div>
        </a></Col>
        <Col>  <a href="https://gabrielparada05.github.io/forecast-C6/">
          <div className="container">
            <div className="title">
              <h3>Weather Dashboard</h3>
              <p>Full Stack</p>
            </div>
            <div>
              <img src={Weather} alt="Leaves on ground" />
            </div>
          </div>
        </a></Col>
        <Col> <a href="https://zaingova.github.io/group-project-learning-words/">
          <div className="container">
            <div className="title">
              <h3>Learning Words</h3>
              <p>Full Stack</p>
            </div>
            <div>
              <img src={Word} alt="Lenses over a book" />
            </div>
          </div>
        </a></Col>
      </Row>
    </Container>



  );
}
