import React, {useState, useEffect} from 'react';
import PhotoGrid from './PhotoGrid';

export default function DescriptionCard({text}){
    return (
        <div style={dCardStyle} className="description-card">
            <p style={{maxWidth:'700px', textAlign:'center'}}>{text}</p>
        </div>
    )
}

const dCardStyle = {
    border: '1px dashed pink',
    boxShadow: '5px 7px',
    padding: '20px 30px'
}