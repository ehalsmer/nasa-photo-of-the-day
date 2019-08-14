import React from 'react';
import {Container} from 'semantic-ui-react';

export default function Video(props){
    return (
        <Container>
            {/* <p>src:{props.src}</p> */}
            <object width="425" height="344" data={props.src}>Video of {props.title}</object>
        </Container>
    )
}
