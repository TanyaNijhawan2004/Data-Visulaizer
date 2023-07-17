import {React,useEffect,useState} from 'react'
import axios from 'axios'
import Alertrec from './Alertrec';
import Dashboard from './Dashboard/Dashboard';
import Dummy from './Dummy';
import logoImage from './logo.png'
import './Nav.css'
const Nav = () => {
    const [showresult, setShowResult] = useState(false);
    const handleClick = () => {
        setShowResult(!showresult);
    };

    return (
        <>
            <Dummy/>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand"><img
        src={logoImage}
        alt="Logo"
        className="logo-image" // Apply the CSS class to the image
      /><strong> Bhumi</strong></a>
                    <form class="d-flex">
                        {/* <input class="form-control me-2" type="search" placeholder= "Search Here" aria-label="Search"/> */}
                        <h2><strong>Data Visualizer</strong></h2>
                    </form>
                    <button className='btn btn-success' onClick={()=>{handleClick()}}>See Results</button>
                </div>
            </nav>
            {((showresult)?<Alertrec/> : <Dashboard/>)}

        </>
    )
}

export default Nav
