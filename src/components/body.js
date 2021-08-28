import {Link} from 'react-router-dom'
import './body.css'
import Particles from 'react-particles-js';

const Body = () =>{
    return(
        <div>
            <div className="scale-in-center" id="welcome">
                <div>
                    <h1 className="head">Gym-X</h1>
                </div>
                <br></br>

                <p><button className="Button" type="submit">
                    <Link to="/main/chest">
                        Click to get started
                    </Link>
                </button></p>
            </div>

            <Particles id="particles-js"
                params={{
                particles: {
                    number: {
                    value: 400,
                    density: {
                        enable: true,
                        value_area: 1000
                    }
                },
                color: {
                    value: '#fff'
                },
                opacity: {
                    value: 0.3,
                    anim: {
                        enable: true
                    }
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2
                    }
                },
                line_linked: {
                    enable: false
                },
                move: {
                    speed: 0.2
                },

                }}}
            />
        </div>
    )
}

export default Body