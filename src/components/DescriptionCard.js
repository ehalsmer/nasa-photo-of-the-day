import React, {useState, useEffect} from 'react';
import PhotoGrid from './PhotoGrid';

export default function DescriptionCard({text}){
    if (!text) return <h3>Loading...</h3>;

    return (
        <div style={dCardStyle} className="description-card">
            <p style={{maxWidth:'700px', textAlign:'center'}}>{text}</p>
        </div>
    )
}

const dCardStyle = {
    // border: '1px dashed teal',
    boxShadow: '7px 7px 15px 1px rgba(0,0,0,0.3)',
    padding: '20px 30px',
    margin: '30px'
}