import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';

const Footer = () => {
    return (
        <div  className='text-white bg-dark pt-5 ps-3 pb-2 d-flex justify-content-around'>
            <div>
                <h6>Nolan 2023</h6>
                <p>Privacy Policy | Terms of Service</p>
            </div>
            <div>
                <h6>Follow Us:</h6>
                <Link to="https://www.instagram.com/nolanaiapp/" className='text-white pe-3' ><AiOutlineInstagram style={{height: "30px", width: "30px" }}/></Link>
                <Link to="https://twitter.com/" className='text-white pe-3' ><AiFillTwitterCircle style={{height: "30px", width: "30px" }}/></Link>
                <Link to="https://www.youtube.com/channel/UCSernMEBRoBJvRJfdc1n2CQ" className='text-white pe-3' ><AiOutlineYoutube style={{height: "30px", width: "30px" }}/></Link>
            </div>
            <div>
                <p>hello@nolanai.app</p>
            </div>
        </div>
    );
};

export default Footer;