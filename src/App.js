import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//pages
import LandingPage from "./pages/LandingPage";
import Home from './pages/Home';
import ProfileRecruiter from './pages/ProfileRecruiter';
import EditProfileRecruiter from './pages/EditProfileRecruiter';
import Chat from './pages/Chat';

function App() {
  return (
    <>
      <Router>
        <Routes>  
            <Route path='/' element={<LandingPage/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/profile-recruiter' element={<ProfileRecruiter/>} />
            <Route path='/edit-profile-recruiter' element={<EditProfileRecruiter/>} />
            <Route path='/chat' element={<Chat/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
