import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//pages
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import ProfileRecruiter from './pages/ProfileRecruiter';
import EditProfileRecruiter from './pages/EditProfileRecruiter';
import Chat from './pages/Chat';
import ProfileJobSeeker from './pages/ProfileJobSeeker';
import EditProfileJobSeeker from './pages/EditProfileJobSeeker';
import LoginJobSeeker from './pages/LoginJobSeeker/index';
import RegisterJobSeeker from './pages/RegisterJobSeeker';
import RegisterRecruiter from './pages/RegisterRecruiter';
import ResetPassword from './pages/ResetPassword';
import ConfirmPassword from './pages/ConfirmPassword';
import ConfirmResetPassword from './pages/ConfirmResetPassword';
import RequestResetLock from './pages/RequestResetLock';
import Hire from './pages/Hire';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login-job-seeker' element={<LoginJobSeeker />} />
          <Route path='/register-job-seeker' element={<RegisterJobSeeker />} />
          <Route path='/profile-recruiter' element={<ProfileRecruiter />} />
          <Route path='/profile-job-seeker' element={<ProfileJobSeeker />} />
          <Route
            path='/edit-profile-recruiter'
            element={<EditProfileRecruiter />}
          />
          <Route
            path='/edit-profile-job-seeker'
            element={<EditProfileJobSeeker />}
          />
          <Route path='/chat' element={<Chat />} />
          {/* add by teguh */}
          <Route path='/register-recruiter' element={<RegisterRecruiter />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/confirm-password' element={<ConfirmPassword />} />
          <Route
            path='/confirm-reset-password'
            element={<ConfirmResetPassword />}
          />
          <Route path='/request-reset-lock' element={<RequestResetLock />} />
          <Route path='/hire' element={<Hire />} />
          {/* component get started dan footer tapi masih minor */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
