/* eslint-disable max-len */

import React from 'react'
import { Container, Header } from 'semantic-ui-react'

const TextContainer = (props) => (
  <Container text style={dCardStyle}>
    {/* <Header as='h2'>Header</Header> */}
    <p>
        {props.text}
    </p>
  </Container>
)

const dCardStyle = {
    // border: '1px dashed teal',
    boxShadow: '7px 7px 15px 1px rgba(0,0,0,0.3)',
    padding: '20px 30px',
    margin: '30px'
}

export default TextContainer;