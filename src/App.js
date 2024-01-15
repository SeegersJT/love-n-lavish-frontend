import Toaster from "./components/toaster/Toaster";
import { Routes, Route } from "react-router-dom";

import PageNotFound from "./components/pageNotFound/PageNotFound";
import HomeMenu from "./components/navbar/HomeMenu";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import ProtectedRoute from "./security/ProtectedRoutes";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomeMenu />}>
          <Route index element={<h1>HOME</h1>} />
          <Route path="gallery" element={<h1>GALLERY</h1>} />
          <Route path="about-us" element={<h1>ABOUT US</h1>} />
          <Route path="contact-us" element={<h1>CONTACT US</h1>} />

          <Route path='/dashboard' element={<ProtectedRoute />}>
            <Route index element={<h1>SECURE DASHBOARD</h1>} />
            <Route path="booking" element={<h1>SECURE BOOKING</h1>} />
            <Route path="profile" element={<h1>SECURE PROFILE</h1>} />

            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>



        <Route path="*" element={<PageNotFound />} />
      </Routes >
    </>
  );
}

export default App;