import React,{ useEffect, useState} from 'react';
import Header from '../Header/Header';
import { Cookies } from 'react-cookie';
import axios from "axios";
import { useNavigate,Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import './HomePage.css'

const HomePage = () => {
    const [songsData,setSongsData]=useState([]);
    const [artistsData,setArtistsData]=useState([])
    const [rate,setRate]=useState(false);
    const [rateVal,setRateVal]=useState(null);
    const [updateRating,SetUpdateRating]=useState({
        songName:"",
        ratings:""
    })
    useEffect(()=>{
        console.log(updateRating)
        axios({
                    //url: "https://instaclone-10x-app.herokuapp.com/add",
                   url:"http://localhost:5000/updateRating",
                   method: "POST",
                   headers: {
                   },
                   data: updateRating
                  }).then((res)=> {
                   console.log(res)
                  }).catch((err)=> {
                   console.log(err)
                  })
                  setRate(false)
    },[updateRating])

    const handleRatings=(song)=>{
        SetUpdateRating({...updateRating,songName:song,ratings:rateVal})
        
    }
    
    const ratingChanged=(rating)=>{
     setRate(true);
     setRateVal(rating)
   
       
    }

    const cookies = new Cookies()
    const token = cookies.get('jwt')
    let navigate = useNavigate();
    useEffect(()=>{
        const afterLogin = ()=>{
            console.log("Inside afterLogin function property.js useEffect")
                axios({
                    method: 'get',
                    url:"http://localhost:5000/songs",
                    headers: {
                        Accept : "application/json",
                        authorization: token,
                        "Content-Type": "application/json"
                      }, 
                      credentials: "include"
                }).then((res)=>{
                    console.log(res.data.song)
                    let songDataHere=res.data.song
                    setSongsData(songDataHere);
                    console.log("data",songsData)
                }).catch((err)=>{
                    console.log("Inside catch block of homepage.js")
                    console.log(err)
                    // if(err){
                    //     navigate("/login")
                    // }
                    if(err.response.data === "Unauthorized user" || err.response.status === 409 ){
                            navigate("/login")
                    }
                })

                axios.get("http://localhost:5000/artists").then((res)=>{
                    console.log(res.data.artist)
                    let artistDataHere=res.data.artist
                    setArtistsData(artistDataHere);
                    console.log("data",songsData)
                }).catch((err)=>{
                    console.log("Inside catch block of homepage.js")
                    console.log(err)
                    // if(err){
                    //     navigate("/login")
                    // }
                    if(err.response.data === "Unauthorized user" || err.response.status === 409 ){
                            navigate("/login")
                    }
                })

        }
    
            afterLogin()
        },[token, navigate])

        useEffect(()=>{
            console.log("songs",songsData);
          },[songsData,artistsData])

    return(
        <>
            <Header/>
            <div className='box_div'>
            <div className='sub_heading'>
                <div className='songs'>
                    Top 10 Songs
                </div>
                <div className='add_songs'>
                  <Link style={{textDecoration:'none'}} to='/add'>  <button><div className='plus'>+</div><div className='after_plus'>Add Song</div></button></Link>
                </div>
            </div>
            <table className='table_one'>
                <thead>
                    <tr>
                    <td>Artwork</td>
                    <td>Song</td>
                    <td>Date of Release</td>
                    <td>Artists</td>
                    <td>Rate</td>
                    </tr>
                </thead>
                <tbody>
                {[...songsData].map((song, i)=>{
                    let theSong=song.songName;
                    if(i<10)
                {
                    return(

                        <tr key={i}>
                            <td className='first_td'><img src={song.image} className="table_image"/></td>
                            <td className='second_td'>{song.songName}</td>
                            <td>{song.dateReleased}</td>
                            <td>{song.artistNames.join(" , ")}</td>
                            <td><div className='table_star'>
                            <ReactStars
                            activeColor="yellow"                     
                            isHalf={true}
                            size={50}
                            onChange={ratingChanged}
                            />
                            </div>
                           {rate?<div className='table_star_btn'><button onClick={()=>handleRatings(theSong)}>I'm Sure</button></div>:null} 
                            </td>
                        </tr>
    
                        )
                }
                    
                })} 
                                    </tbody>
            </table>

            <div className='artist'>
            <div className='top_artist'>Top 10 Artists</div>
            </div>

            <table className='table_two'>
                <thead>
                    <tr>
                    <td>Artwork</td>
                    <td>Date of Birth</td>
                    <td className='thead_song'>Songs</td>
                    </tr>
                </thead>
                <tbody>
                    {[...artistsData].map((artist,i)=>{
                        if(i<10)
                        {
                            return(
                                <tr key={i}>
                            <td>{artist.artistName}</td>
                            <td>{artist.dateOfBirth}</td>
                            <td className='td_song'>{artist.songNames.join(" , ")}</td>
    
                        </tr>  
                            )
                        }
                        
                    })}
                    
                    
                </tbody>
            </table>
            </div>
        </>
    )
}
export default HomePage;