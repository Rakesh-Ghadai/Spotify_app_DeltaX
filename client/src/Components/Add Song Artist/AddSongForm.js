import React,{useState} from 'react';
import Header from '../Header/Header';
import './AddSongForm.css';
import Multiselect from 'multiselect-react-dropdown';
import Filebase64 from "react-file-base64";
const AddSongForm = () => {
    const [data,setData]=useState("")
    return(
        <>
            <Header/>
            <div className='primary_div'>
                <div className='heading'>
                    <p>Adding a New Song</p>
                </div>

                <div className='inside_div'>
                    <div className='song_name'>
                        <p>Song Name</p>
                    </div>
                    <div className='song_text'>
                        <input className='song_text_input' type='text'/>
                    </div>
                </div>

                <div className='inside_div'>
                    <div className='date_released'>
                        <p>Date Released</p>
                    </div>
                    <div className='date_text'>
                        <input className='date_text_input' type='text'/>
                    </div>
                </div>

                <div className='inside_div'>
                    <div className='artwork'>
                        <p>Artwork</p>
                    </div>
                    <div  className="artwork_image">
                        <Filebase64
                                    id="fileimage"
                                    type="file"
                                    multiple={false}
                                    // onDone={({base64}) => {setdata({ ...data,image: base64 })}}
                                    onDone={({base64}) => {setData(base64)}}
                                    title="Add File"
                                    
                        />
                    </div>
                </div>

                <div className='inside_div'>
                    <div>
                        <p>Artists</p>
                    </div>
                    <div>
                        <Multiselect
                        isObject={false}
                        onRemove={(e)=>{console.log(e)}}
                        onSelect={(e)=>{console.log(e)}}
                        options={['rakesh','mahesh']}
                        showCheckbox
                        />
                    </div>
                </div>

                <div className='inside_div'>
                    <div>
                                <button>Cancel</button>
                    </div>
                    <div>
                                <button>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddSongForm;