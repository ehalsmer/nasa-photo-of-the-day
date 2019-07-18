import React, {useState, useEffect} from 'react';
import PhotoGrid from './PhotoGrid';

export default function PhotoCard(props){
    if (!props.imgUrl) return (<h3>🚀</h3>)

    if (!props.copyright) return (
        <div className="photo-card">
        <img style={{maxWidth:'1200px', maxHeight:'1000px'}} src={props.imgUrl}/>
    </div>
    )
    console.log(props);

    return (
        
        <div className="photo-card">
            <img style={{maxWidth:'1200px', maxHeight:'1000px'}} src={props.imgUrl}/>
            <p style={copyrightStyle}>Copyright: {props.copyright}</p>
        </div>
    )
}

const copyrightStyle = {
    padding: '1px 0px',
    margin: '1px 0px',
    fontSize: '0.7rem'
}
