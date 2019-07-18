import React from 'react';
import {Image} from 'semantic-ui-react';

const DisplayImage = (props) => {
    console.log(props);
    if (!props.copyright) return(
        <div style={{maxWidth: '94%'}}>       
            <Image src={props.imgUrl} size='auto' />
        </div>
        )
    return (
        <div style={{maxWidth: '94%'}}>
        <Image src={props.imgUrl} size='auto' />
        <p style={copyrightStyle}>Copyright: {props.copyright}</p>
        </div>
    )
}

const copyrightStyle = {
    padding: '1px 0px',
    margin: '1px 0px',
    fontSize: '0.8rem'
}

export default DisplayImage