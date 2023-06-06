import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <Header />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/profile"
              element={<Profile state={props.state.profilePage} />}
            />
            <Route
              path="/messages"
              element={<Dialogs state={props.state.dialogsPage} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
