import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Users from "./components/Users/Users";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <HeaderContainer />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile/:userId"
              element={<ProfileContainer />}
            />
            <Route
              path="/profile"
              element={<ProfileContainer />}
            />
            <Route
              path="/messages"
              element={<Dialogs />}
            />
            <Route
              path="/users"
              element={<Users />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
