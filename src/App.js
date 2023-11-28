import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Users from "./components/Users/Users";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

function App(props) {
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
              path="/messages"
              element={<Dialogs />}
            />
            <Route
              path="/users"
              element={<Users />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
