import React ,{ useState, useEffect } from "react";
import axios from 'axios';
import Header from '../Header/Header';
import './AddSongForm.css';
import {Link, useNavigate} from 'react-router-dom';
import {Modal} from "reactstrap";
import { GoFileMedia } from "react-icons/go";
import Multiselect from 'multiselect-react-dropdown';
import Filebase64 from "react-file-base64";

const AddSongForm = () => {
  
  const [users,setUsers]=useState([]);
  const [artists,setArtists]=useState([]);
  const[uArtist,setUartist]=useState({
    artistsNames:[],
    songName:""
  })
  let navigate = useNavigate();
  const [songData,setSongData]=useState({
    songName:"",
    dateReleased:"",
    image:"",
    artistNames:[],
    ratings:0

  })
                  // console.log(artists)
  const [data, setdata]=useState({
    artistName:"",
    dateOfBirth:"",
    bio:"",
    songNames:[]
  })
    const [modalIsopen, setModalIsopen]=useState(false);
    useEffect( ()=>{
      //axios.get("https://instaclone-10x-app.herokuapp.com/user")
      axios.get("http://localhost:5000/artists")
      .then((res)=>{
        console.log(res.data);
           setUsers(res.data.artist);

          console.log("users",users)
          
      }).catch(err=>{
          console.log(err)
      })
  },[data])

  useEffect(()=>{
    let tempArtist=[];
          for(let i=0;i<users.length;i++)
          {
            tempArtist.push(users[i].artistName)
          }
           setArtists(tempArtist);
          console.log("artist=",artists);
  },[users,data])

  const handleArtist=()=>{
    if(data.artistName==="" || data.dateOfBirth==="" || data.bio==="")
    {
      window.alert("please enter all the details")
    }
    else{
      axios({
        //url: "https://instaclone-10x-app.herokuapp.com/add",
       url:"http://localhost:5000/addartist",
       method: "POST",
       headers: {
       },
       data: data
   }).then((res)=> {
       console.log(res)
       setModalIsopen(false);
       setdata({
        artistName:"",
        dateOfBirth:"",
        bio:"",
        songNames:[]
      })
   }).catch((err)=> {
       console.log(err)
   })   
    }
    
  }
  const handleSongAndArtist=()=>{
    if(songData.songName==="" || songData.image==="" || songData.dateReleased==="" || songData.artistNames===[])
    {
      window.alert("please enter all the details and submit")
    }
    else{
      console.log(songData.artistNames);
    axios({
      //url: "https://instaclone-10x-app.herokuapp.com/add",
     url:"http://localhost:5000/addsong",
     method: "POST",
     headers: {
     },
     data: songData
 }).then((res)=> {
     console.log(res)
 }).catch((err)=> {
     console.log(err)
 })

 axios({
  //url: "https://instaclone-10x-app.herokuapp.com/add",
 url:"http://localhost:5000/updateArtist",
 method: "POST",
 headers: {
 },
 data: uArtist
}).then((res)=> {
 console.log(res)
}).catch((err)=> {
 console.log(err)
})
navigate("/")
    }
    
   }

    return(
        <>
            <Header/>
            <div className='primary_div'>
                <div className='heading'>
                    <p>Adding a New Song</p>
                </div>
                <form>
                <div className='inside_div'>
                  
                    <div className='song_name'>
                        <p>Song Name</p>
                    </div>
                    <div className='song_text'>
                        <input className='song_text_input' type='text' required={true} onChange={(e)=>{setSongData({...songData,songName: e.target.value});setUartist({...uArtist,songName:e.target.value})}}/>
                    </div>
                </div>

                <div className='inside_div'>
                    <div className='date_released'>
                        <p>Date Released</p>
                    </div>
                    <div className='date_text'>
                        <input className='date_text_input' type='text' placeholder="e.g.(01-jan-1999)" required={true} onChange={e=>setSongData({...songData,dateReleased: e.target.value})}/>
                    </div>
                </div>

                <div className='inside_div'>
                    <div className='artwork'>
                        <p>Artwork</p>
                    </div>
                    <div  className="input-file">
                        <GoFileMedia className="imageicon"/>
                        <Filebase64
                       
                          id="fileimage"
                          type="file"
                          onDone={({ base64 }) => setSongData({...songData,image: base64})}
                          multiple={false}
                          title="Add File"/>
                     </div>
                </div>

                <div className='inside_div'>
                    <div className='artist'>
                        <p>Artists</p>
                    </div>
                    <div className='multiselect'>
                        <Multiselect
                        required={true}
                        displayValue="key"
                        portalclassname="multi_class"
                        onKeyPressFn={function noRefCheck(){}} 
                        isObject={false}
                        onRemove={(e)=>{console.log(e)}}
                        onSelect={(e)=>{
                          console.log(e);
                          let ans=[]
                       for(let ele of e){
                       ans.push(ele)}
                      
                       console.log(ans)
                       
                       setSongData({...songData,artistNames:ans})
                       setUartist({...uArtist,artistsNames:ans})
                        }}
                        options={artists}
                        showCheckbox
                        />
                    </div>
                    <div className='add_artist_div'>
                    <button className="add_artist_btn" onClick={()=>setModalIsopen(true)}><div className='div_plus'>+</div><div className='div_add'>Add Artist</div></button> 
                    </div>
                    <Modal isOpen={modalIsopen} portalclassname="modal">
                        <div className="artist-form">

                          <div className="box1">
                            <p className="title">Add Artist</p>
                            <button className="close" onClick={()=>setModalIsopen(false)}><b>X</b></button>
                          </div>
                        <hr></hr>

                        <div className="box2">
                          <div className="cont1">
                            <label for="artist-name">Artist Name</label>
                          </div>
                        <div className="cont2">
                            <input type="text" id="artist-name" required={true} onChange={e=>setdata({...data,artistName: e.target.value})} ></input>
                        </div>
                        </div>

                        <div className="box2">
                          <div className="cont1">
                            <label for="artist-date">Date of Birth</label>
                          </div>
                          <div className="cont2">
                            <input type="date" id="artist-date" required={true} onChange={e=>setdata({...data,dateOfBirth: e.target.value})}></input>
                          </div>
                        </div>

                        <div className="box2">
                          <div className="cont1">
                            <label for="artist-bio">Bio</label>
                          </div>
                          <div className="cont2">
                            <input type="textarea" id="artist-bio" required={true} onChange={e=>setdata({...data,bio: e.target.value})}></input>
                          </div>
                        </div>

                         <div className="button">
                          <button className="cancel" onClick={()=>setModalIsopen(false)}>Cancel</button>
                          <button className="done" onClick={handleArtist} >Done</button>
                         </div>
                    </div>
                  </Modal>
                </div>
                <div className='inside_div btn_inside'>
                    <div className='cancel_btn_div'>
                               <Link to='/'><button className='cancel_btn_main'>Cancel</button></Link> 
                    </div>
                    <div className='save_btn_div'>
                                <button className='save_btn_main' onClick={handleSongAndArtist}>Save</button>
                    </div>
                </div>
                </form>
            </div>
        </>
    )
}
export default AddSongForm;