import React, {useState, useEffect} from 'react';
import PhotoGrid from './PhotoGrid';

export default function PhotoCard(props){
    if (!props.copyright) return <h3></h3>;
    console.log(props);

    return (
        
        <div style={pCardStyle} className="photo-card">
            <img style={{maxWidth: '1200px'}} src={props.imgUrl}/>
            <p style={copyrightStyle}>Copyright: {props.copyright}</p>
        </div>
    )
}

const copyrightStyle = {
    padding: '1px 0px',
    margin: '1px 0px',
    fontSize: '0.7rem'
}

const pCardStyle = {

}