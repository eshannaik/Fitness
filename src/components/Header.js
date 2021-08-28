import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import logo from './logo.png'
import './Header.css'

const Header = () =>{
    return(
        <div className="main">
            <img
                className="header_logo"
                src={logo}
                alt=""
                width="60"
                height="60"
            /> 

            {/* <h2 className="head">Gym-X</h2> */}

            <IconButton>
                <Link to="/about me">
                    <ContactPhoneIcon fontSize="large" className="header_icon" />
                </Link>
            </IconButton>
        </div>
    )
}

export default Header