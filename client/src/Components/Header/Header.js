import React from 'react';
import { BsSearch } from "react-icons/bs";
import './Header.css'

const Header = () => {
    return(
        <>
            <div className='main_header'>
                <div className='main_div'>
                    <div className='home'>
                           <p>Home</p> 
                    </div>
                    <div className='main_search_field'>
                        <div className='search_field'>
                            <button><BsSearch className="search_icon"/></button>
                            <input type='text' placeholder='search' className='search_area'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;