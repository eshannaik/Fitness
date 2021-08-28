// import Login from './components/Login'
import {Route} from 'react-router-dom'
import Header from './components/Header'
import Body from './components/body'
import SideBar from './components/sidebar'
import Chest from './components/Body Parts/chest'
import Back from './components/Body Parts/back'
import Leg from './components/Body Parts/legs'
import Shoulder from './components/Body Parts/shoulder'
import Triceps from './components/Body Parts/triceps'
import Biceps from './components/Body Parts/biceps'
import AboutMe from './components/about me'
import './App.css'
// import Particles from 'react-particles-js';

function App() {
  return (
    <div>
      <div>
        <Route exact path="/">
          <Body />
        </Route>
        <Route exact path="/about me">
          <AboutMe />
        </Route>
        <Route exact path="/main/chest">
            <Header />
          <div class="flexbox-container">
            <SideBar />
            <Chest />
          </div>
        </Route>
        <Route exact path="/main/back">
          <Header />
          <div class="flexbox-container">
            <SideBar />
            <Back />
          </div>
        </Route>
        <Route exact path="/main/legs">
          <Header />
          <div class="flexbox-container">
            <SideBar />
            <Leg />
          </div>
        </Route>
        <Route exact path="/main/shoulder">
          <Header />
          <div class="flexbox-container">
            <SideBar />
            <Shoulder />
          </div>
        </Route>
        <Route exact path="/main/triceps">
          <Header />
          <div class="flexbox-container">
            <SideBar />
            <Triceps />
          </div>
        </Route>
        <Route exact path="/main/biceps">
          <Header />
          <div class="flexbox-container">
            <SideBar />
            <Biceps />
          </div>
        </Route>
      </div>
    </div>
  );
}

export default App;
