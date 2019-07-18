import React, {useState, useEffect} from 'react';
import axios from 'axios';
import VideoCard from './VideoCard';
import { Container, Header, Input, Rail, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import TextContainer from './TextContainer';
import DisplayImage from './ImgContainer';
// import InputExampleInput./TextContainer


export default function PhotoGrid(){
    const [photo, setPhoto] = useState('');
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [copyright, setCopyright] = useState('');
    const [media, setMedia] = useState('');
    const [vidUrl, setVidUrl] = useState('');
    const [date, setDate] = useState('2019-07-18') // ToDo create today's date and start with that. Also set it as max on input form.

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
            setPhoto(url);
            setDescription(descriptionText);
            setTitle(titleText);
            setCopyright(copyrightText);
            setMedia(mediaType);
            setVidUrl(url);
        })
    }, [date])
    
    const segStyle = {
        //  width: 175, 
        //  height: 175,
         fontSize: '12px'
        }

    console.log(media);
    if (media === 'video'){
        return (
            <Container textAlign='center'>
                <Header as='h1'>{title}</Header>
                <VideoCard src={vidUrl}/>
                <TextContainer text={description}/>
                <Input type="date" onChange={(newDate)=>{setDate(newDate.target.value)}} defaultValue={date} id="dateInput" min="1995-06-16" max="2019-07-18"/>
            </Container>
        )
    } else {

    return (
        <Container textAlign='center'>
        <Rail internal position='left'>
          <Segment compact style={segStyle} >This app was built with NASA's APOD API. For more information, visit <a href='https://api.nasa.gov/index.html'>https://api.nasa.gov/index.html</a></Segment>
        </Rail>
            <Header as='h1'>{title}</Header>
            <DisplayImage imgUrl={photo} copyright={copyright}/>
            <TextContainer text={description}/>
            <Input type="date" onChange={(newDate)=>{setDate(newDate.target.value)}} defaultValue={date} id="dateInput" min="1995-06-16" max="2019-07-18"/>
        </Container>
    )
    }}
