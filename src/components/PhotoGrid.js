import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function PhotoGrid(){
    const [photo, setPhoto] = useState([]);

    useEffect(()=>{
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=sBsh1VAVYr7U7b0U8OW0CjDwbIgr47abietkqcwb&date=2012-03-14')
        .then(data => {
            const photoReceived = data.data.hdurl;
            // console.log(data.data)
            setPhoto(photoReceived);
        })
    }, [])
    
    return (
        <img src={photo}/>
    )
}