import {BrowserRouter as Router ,Route,Routes, } from 'react-router-dom'
import './App.scss';
import LeftPAne from './pages/leftPane/LeftPane';
import Mid from './components/theMid/Mid';
import Login from './components/login-test/Login';
import LogInTwitter from './pages/login/LogInTwitter';
import Home from './pages/home/Home';
import Right from './pages/rigthPane/Right';
import Profile from './pages/Profile/Profile';
import Personal from './components/theMid/Personal/Personal';
import WhoFollow from './components/profile/Who-to-follow/WhoFollow';
import Replies from './components/profile/replies/Replies';
import Highlights from './components/profile/highlights/Highlights';
import Media from './components/profile/media/Media'
import Likes from './components/profile/likes/Likes';
import Postes from './components/theMid/postes/Postes';
import Test from './components/Test';
import Messages from './pages/home/messages/Messages';
import Notifications from './components/notifications/Notifications';













function App() {
  return (
    <Router>
    <div className='app'>
        {/* <LogInTwitter/> */}
        <LeftPAne/>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='' element={ <Postes/>}/>
            <Route path='following' element={ <Test/>}/>
          </Route>
          <Route path='/profile' element={<Profile/>}>
                  <Route path='' element={  <WhoFollow/>}/>
                  <Route path='replies' element={ <Replies/>  }/> 
                  <Route path='highlights' element={ <Highlights/>  }/> 
                  <Route path='media' element={ <Media/>  }/> 
                  <Route path='likes' element={ <Likes/>  }/> 
          </Route>
          <Route path='messages' element={<Messages/>}/>
          <Route path='Notifications' element={<Notifications/>}>

          </Route>
        </Routes>
    </div>
    </Router>

  );
}

export default App;
