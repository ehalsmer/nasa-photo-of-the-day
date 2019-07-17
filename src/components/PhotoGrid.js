import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';
import VideoCard from './VideoCard';
import DescriptionCard from './DescriptionCard';

export default function PhotoGrid(){
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [copyright, setCopyright] = useState('');
    const [media, setMedia] = useState('');
    const [vidUrl, setVidUrl] = useState('');

    useEffect(()=>{
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=sBsh1VAVYr7U7b0U8OW0CjDwbIgr47abietkqcwb')
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
    }, [])
    
    console.log(media);
    if (media === 'video'){
        return (
            <div className='container'>
            <h1>{title}</h1>
            <VideoCard src={vidUrl}/>
            <DescriptionCard text={description}/>
        </div>
        )
    }

    return (
        <div className='container'>
            <h1>{title}</h1>
            <PhotoCard imgUrl={photo} copyright={copyright} media={media}/>
            <DescriptionCard text={description}/>
        </div>
    )
}