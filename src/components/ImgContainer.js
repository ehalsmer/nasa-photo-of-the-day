import React from 'react';
import {Image, Container} from 'semantic-ui-react';

const DisplayImage = (props) => {
    // console.log(props);
    if (!props.imgUrl) return <h3>Loading...</h3>;
    
    if (!props.copyright) return(
        <Container style={{maxWidth: '94%'}}>       
            <Image centered src={props.imgUrl} alt={props.title} size='massive' />
        </Container>
        )
    return (
        <Container style={{maxWidth: '94%'}}>
            <Image centered src={props.imgUrl} alt={props.title} size='massive' style={{maxHeight: '700px'}}/>
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