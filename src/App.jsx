import { Routes, Route } from "react-router-dom";
import NavMain from "./components/Nav/NavMain";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import LoggedOut from "./components/LoggedOut/LoggedOut";
import AllBands from "./components/Band/AllBands";
import OneBand from "./components/Band/OneBand";
import AllMusicians from "./components/Musician/AllMusicians";
import OneMusician from "./components/Musician/OneMusician";
import FormBand from "./components/Forms/FormBand";
import FormMusician from "./components/Forms/FormMusician";
import FormEditProfile from "./components/Forms/FormEditProfile";
import Contact from "./pages/Contact";
import MyRequests from "./pages/MyRequests";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-bands" element={<AllBands />} />
        <Route path="/all-bands/:id" element={<OneBand />} />
        <Route path="/all-musicians" element={<AllMusicians />} />
        <Route path="/all-musicians/:id" element={<OneMusician />} />

        <Route element={<LoggedOut />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<PrivateRoute />}>
          {/* All routes after the PrivateRoute require the user to be loggedIn !!*/}
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact/:category/:id" element={<Contact />} />
          <Route path="/profile/edit" element={<FormEditProfile />} />
          <Route path="/all-bands/create" element={<FormBand />} />
          <Route path="/all-musicians/create" element={<FormMusician />} />
          <Route path="/my-requests" element={<MyRequests />} />
          <Route path="/my-requests/one-band/:id" element={<OneBand />} />
          <Route
            path="/my-requests/one-musician/:id"
            element={<OneMusician />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
