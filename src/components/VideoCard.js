import React, {useState, useEffect} from 'react';
import PhotoGrid from './PhotoGrid';

export default function PhotoCard(props){
    // if (!props.copyright) return <h3></h3>;
    // console.log(props);

    return (
        <div className="photo-card">
            {/* <p>src:{props.src}</p> */}
            <object width="425" height="344" data={props.src}></object>
        </div>
    )
}

// const copyrightStyle = {
//     padding: '1px 0px',
//     margin: '1px 0px',
//     fontSize: '0.7rem'
// }

// const pCardStyle = {

// }