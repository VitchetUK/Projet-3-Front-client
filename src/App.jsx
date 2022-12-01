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

function App() {
  return (
    <div className="App">
      <NavMain />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/allBands" element={<AllBands />} />

        <Route path="/allBands/:id" element={<OneBand />} />

        <Route path="/allBands/create" element={<FormBand />} />

        <Route path="/allMusicians" element={<AllMusicians />} />

        <Route path="/allMusicians/:id" element={<OneMusician />} />

        <Route path="/allMusicians/create" element={<FormMusician />} />

        {/*<Route index element={<ListCharacters />} />
          <Route path=":id" element={<OneBand />} />
        </Route>
        <Route path="/allMusiciansRequest" element={<AllMusicians />}>
          <Route path=":id" element={<OneMusician />} />
        </Route>
        {/*<Route index element={<ListCharacters />} /> */}
        <Route element={<LoggedOut />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<PrivateRoute />}>
          {/* All routes after the PrivateRoute require the user to be loggedIn !!*/}
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<FormEditProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
