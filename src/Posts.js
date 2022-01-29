import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import LoadingImage from './images/loading.jpeg';

const axios = require('axios').default;

const Posts = (props) => {

  return(
    <Container className="pt-5">
      <Card className="px-2 mt-3">
        <Card.Img style={{height: "30rem"}} src={props.img} />
        <Card.Text><strong>{props.votes} likes</strong></Card.Text>
        <Card.Text>
          <span style={{"fontWeight": "bold"}}>{props.user}</span> {props.content}
        </Card.Text>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">💬</InputGroup.Text>
          <FormControl
            placeholder="Add a comment..."
            aria-label="Add a comment..."
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Card>
    </Container>
    
  )
}

export default Posts;