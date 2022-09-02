import React, {useState} from 'react';
import Header from '../Header/Header';
// import {AiFillStar} from "react-icons/ai";
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import './HomePage.css'

const HomePage = () => {

    return(
        <>
            <Header/>
            <div className='sub_heading'>
                <div className='songs'>
                    Top 10 Songs
                </div>
                <div className='add_songs'>
                    <button><div className='plus'>+</div><div className='after_plus'>Add Song</div></button>
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
                    
                    <tr>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>

                    </tr>
                    <tr>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>

                    </tr>
                    <tr>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>

                    </tr>
                    <tr>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>

                    </tr>
                </tbody>
            </table>

            <div className='artist'>
            <div className='top_artist'>Top 10 Artists</div>
            </div>

            <table className='table_two'>
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
                    
                    <tr>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>

                    </tr>
                    <tr>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>

                    </tr>
                    <tr>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>

                    </tr>
                    <tr>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>
                        <td>one</td>

                    </tr>
                </tbody>
            </table>
            
        </>
    )
}
export default HomePage;