import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Navigation from '../Navigation';
import ".Dropdown.css";
import { useSelector } from 'react-redux';


function Dropdown( props ) {
    const [ display, setDisplay ] = useState( 'none' )
    const sessionUser = useSelector(state => state.session.user);
    function handleClick() {
        if ( display === 'none' ) {
            setDisplay( 'block' )
        } else {
            setDisplay( 'none' )
        }
    }

    function handleClick2() {
        setDisplay( 'none' )
    }

    return (
        <div>
            <div className='dropdown-button' onClick={handleClick}>
            <i className="fa-solid fa-bars"></i>
            <i className="fa-solid fa-circle-user"></i>
                </div>
            <div className='dropdown-menu' onClick={handleClick2} style={{display:display}}>
                <div id="modal2-background" />
                <Navigation />
            </div>

        </div>

    )

}

export default Dropdown 