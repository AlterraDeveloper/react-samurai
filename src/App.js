import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Users from "./components/Users/Users";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <Header />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile/*"
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
