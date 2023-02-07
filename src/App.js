import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import ProfileRecruiter from "./pages/ProfileRecruiter";
import EditProfileRecruiter from "./pages/EditProfileRecruiter";
import Chat from "./pages/Chat";
import ProfileJobSeeker from "./pages/ProfileJobSeeker";
import EditProfileJobSeeker from "./pages/EditProfileJobSeeker";
import LoginJobSeeker from "./pages/LoginJobSeeker/index";
import RegisterJobSeeker from "./pages/RegisterJobSeeker";
import LoginRecruiter from "./pages/LoginRecruter";
import RegisterRecruiter from "./pages/RegisterRecruiter";
import ResetPassword from "./pages/ResetPassword";
import ConfirmPassword from "./pages/ConfirmPassword";
import ConfirmResetPassword from "./pages/ConfirmResetPassword";
import RequestResetLock from "./pages/RequestResetLock";
import Hire from "./pages/Hire";
import { Provider } from "react-redux";
import store from "./store/reducers";
import NotFound from "./pages/404/404";
import Notification from "./pages/Notifikasi/Notification";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login-job-seeker" element={<LoginJobSeeker />} />
            <Route
              path="/register-job-seeker"
              element={<RegisterJobSeeker />}
            />
            <Route
              path="/profile-recruiter/:id"
              element={<ProfileRecruiter />}
            />
            <Route
              path="/profile-job-seeker/:id"
              element={<ProfileJobSeeker />}
            />
            <Route
              path="/edit-profile-recruiter"
              element={<EditProfileRecruiter />}
            />
            <Route
              path="/edit-profile-job-seeker"
              element={<EditProfileJobSeeker />}
            />
            <Route path="/chat" element={<Chat />} />\
            <Route path="/notification" element={<Notification />}></Route>
            {/* add by teguh */}
            <Route path="/login-recruiter" element={<LoginRecruiter />} />
            <Route path="/register-recruiter" element={<RegisterRecruiter />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/confirm-password" element={<ConfirmPassword />} />
            <Route
              path="/confirm-reset-password"
              element={<ConfirmResetPassword />}
            />
            <Route path="/request-reset-lock" element={<RequestResetLock />} />
            <Route path="/hire/:id" element={<Hire />} />
            {/* component get started dan footer tapi masih minor */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
