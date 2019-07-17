import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';
import VideoCard from './VideoCard';
import DescriptionCard from './DescriptionCard';
import Date from './Date';

export default function PhotoGrid(){
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [copyright, setCopyright] = useState('');
    const [media, setMedia] = useState('');
    const [vidUrl, setVidUrl] = useState('');
    const [date, setDate] = useState('2019-07-17')

    useEffect(()=>{
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=sBsh1VAVYr7U7b0U8OW0CjDwbIgr47abietkqcwb&date=${date}`)
        .then(data => {
            console.log(data.data)
            const photoURL = data.data.hdurl;
            const descriptionText = data.data.explanation;
            const titleText = data.data.title;
            const copyrightText = data.data.copyright;
            const mediaType = data.data.media_type;
            const url = data.data.url;
            setPhoto(photoURL);
            setDescription(descriptionText);
            setTitle(titleText);
            setCopyright(copyrightText);
            setMedia(mediaType);
            setVidUrl(url);
        })
    }, [date])
    
    console.log(media);
    if (media === 'video'){
        return (
            <div className='container'>
            <h1>{title}</h1>
            <VideoCard src={vidUrl}/>
            <DescriptionCard text={description}/>
            <div>Choose Another Date: <input onChange={(value)=>{setDate(value.target.value)}} defaultValue="2019-07-17" type="date" id="dateInput" min="" max="2019-07-17"/></div>
        </div>
        )
    }

    return (
        <div className='container'>
            <h1>{title}</h1>
            <PhotoCard imgUrl={photo} copyright={copyright} media={media}/>
            <DescriptionCard text={description}/>
            {/* <Date value={date}/> */}
            <div>Choose Another Date: <input onChange={(value)=>{setDate(value.target.value)}} defaultValue="2019-07-17" type="date" id="dateInput" min="" max="2019-07-17"/></div>
        </div>
    )
}
