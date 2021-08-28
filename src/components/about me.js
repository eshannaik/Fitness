import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import Particles from 'react-particles-js';
import './about me.css'
import {Link} from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/IconButton';

const AboutMe = () =>{
    return(
        <div>
            <div id="welcome">
                <IconButton>
                    <Link to="/main/chest">
                        <ExitToAppIcon fontSize="large" className="header_icon1" />
                    </Link>
                </IconButton>
            
                <div>
                    <div style={{backgroundColor: "white", margin: "100px"}}>
                        <h1><center>About Me</center></h1>
                        <br></br>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
                        <br></br>
                        <br></br>
                    </div>
                </div>
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

export default AboutMe