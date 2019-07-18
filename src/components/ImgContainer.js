import React from 'react';
import {Image, Container} from 'semantic-ui-react';

const DisplayImage = (props) => {
    console.log(props);
    if (!props.copyright) return(
        <Container style={{maxWidth: '94%'}}>       
            <Image centered='true' src={props.imgUrl} size='auto' />
        </Container>
        )
    return (
        <Container style={{maxWidth: '94%'}}>
            <Image centered='true' src={props.imgUrl} size='auto' style={{maxHeight: '700px'}}/>
            <p style={copyrightStyle}>Copyright: {props.copyright}</p>
        </Container>
    )
}

const copyrightStyle = {
    padding: '1px 0px',
    margin: '1px 0px',
    fontSize: '0.8rem'
}

export default DisplayImage