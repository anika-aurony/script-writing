import React from 'react';
import "./Banner.css"
import { Button } from 'react-bootstrap';
import icon from "../../../assets/hero_logo.webp"
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='bg text-white p-5'>
            <div className=' p-5'>
                <div className="logo ">
                    <img  src={icon} alt="" srcset="" />
                </div>

               
                <h3 className='pt-4'>Free Script Writing Software</h3>
                <p>Unleash creativity with AI Copilot - craft compelling screenplays</p>
                <Button variant="danger"><Link to="/dashboard" className='text-decoration-none text-light'>Go to dashboard</Link></Button>
            </div>
        </div>
    );
};

export default Banner;