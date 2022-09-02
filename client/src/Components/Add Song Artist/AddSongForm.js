import React from 'react';
import Header from '../Header/Header';
const AddSongForm = () => {
    return(
        <>
            <Header/>
            <div className='main_div'>
                <div>
                    <p>Adding a New Song</p>
                </div>

                <div>
                    <div>
                        <p>Song Name</p>
                    </div>
                    <div>
                        <input type='text'/>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Date Released</p>
                    </div>
                    <div>
                        <input type='text'/>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Artwork</p>
                    </div>
                    <div>
                    <div  className="input-file">
                        <Filebase64
                                    id="fileimage"
                                    type="file"
                                    multiple={false}
                                    onDone={({base64}) => {setdata({ ...data,image: base64 });setName(!name)}}
                                    title="Add File"
                                    
                        />
               {/* {name?<div className="addphoto"><span className="image_name" >Add Photo</span></div>:null}  */}
                    </div>
                    </div>
                </div>

                <div>
                    <div>
                        <p>Artists</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}