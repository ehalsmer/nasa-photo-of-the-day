import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';
import DescriptionCard from './DescriptionCard';

export default function PhotoGrid(){
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [copyright, setCopyright] = useState('');

    useEffect(()=>{
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=sBsh1VAVYr7U7b0U8OW0CjDwbIgr47abietkqcwb&date=2012-02-14')
        .then(data => {
            console.log(data.data)
            const photoURL = data.data.hdurl;
            const descriptionText = data.data.explanation;
            const titleText = data.data.title;
            const copyrightText = data.data.copyright;
            setPhoto(photoURL);
            setDescription(descriptionText);
            setTitle(titleText);
            setCopyright(copyrightText);
        })
    }, [])
    
    return (
        <div className='container'>
            <h1>{title}</h1>
            <PhotoCard imgUrl={photo} copyright={copyright}/>
            <DescriptionCard text={description}/>
        </div>
    )
}