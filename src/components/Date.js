import React, {useState, useEffect} from 'react';
import PhotoGrid from './PhotoGrid';

export default function Date(props){
    console.log(props);
    return (
        <div className="date">
            <div>Choose Another Date: <input type="date" id="dateInput" value={props.value} min="" max="2019-07-17"/></div>
        </div>
    )
}