import Toaster from "./components/toaster/Toaster";
import { Routes, Route } from "react-router-dom";

import PageNotFound from "./components/pageNotFound/PageNotFound";
import HomeMenu from "./components/navbar/HomeMenu";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

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
          <Route path="booking" element={<h1>BOOKING</h1>} />
        </Route>

        <Route path="/dashboard" element={<h1>DASHBOARD</h1>} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes >
    </>
  );
}

export default App;