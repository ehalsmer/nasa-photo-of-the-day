/* eslint-disable max-len */

import React from 'react'
import { Container } from 'semantic-ui-react'

const TextContainer = (props) => {
  // if (!props.text) return <div></div>;
  return (
    <Container fluid text textAlign='center' style={dCardStyle}>
      {/* <Header as='h2'>Header</Header> */}
      <p>
          {props.text}
      </p>
    </Container>
  )
}

const dCardStyle = {
    boxShadow: '7px 7px 15px 1px rgba(0,0,0,0.3)',
    padding: '40px 40px',
    margin: '30px'
}

export default TextContainer;