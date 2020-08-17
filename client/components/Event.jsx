import React, { useState, useEffect } from "react";
import EventAttendees from './EventAttendees.jsx';
import Content from './Content.jsx';
import { ListGroup, Container, Row, Jumbotron } from 'react-bootstrap';

export default function Event(props) {

  return (
    <>
    <b className="hr anim"></b>
    <div className="event">
      <Container>
        <Jumbotron fluid>
          <Container className='eventJumbotron'>
            <h1>{props.title}</h1>
            <h4>{props.date} - {props.time}</h4>
            <h4>Location: {props.location}</h4>
            <p>{props.description}</p>       
          </Container>
        </Jumbotron>

        <Container>
          <EventAttendees 
          {...props}
            userUpdate={props.userUpdate}
            />
        </Container>
        <Content {...props} />
      </Container>
    </div>
    </>
  );
}