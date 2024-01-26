import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Users from "./components/Users/Users";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "./hoc/withRouter";
import {initialize} from "./redux/appReducer";
import {Preloader} from "./components/Preloader/Preloader";

const Dialogs = React.lazy(() => import("./components/Dialogs/Dialogs"))
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"))

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if (!this.props.appInitialized) {
            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Suspense fallback={<Preloader/>}>
                        <Routes>
                            <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}/>
                            <Route path="/messages" element={<Dialogs/>}/>
                            <Route path="/users" element={<Users/>}/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        );
    }
}

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="app-wrapper">
//         <Navbar />
//         <HeaderContainer />
//         <div className="app-wrapper-content">
//           <Routes>
//             <Route path="/profile/:userId" element={<ProfileContainer />} />
//             <Route path="/profile" element={<ProfileContainer />} />
//             <Route path="/messages" element={<Dialogs />} />
//             <Route path="/users" element={<Users />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

const mapStateToProps = (state) => {
    return {
        appInitialized: state.app.initialized
    };
};

const mapDispatchToProps = {
    initializeApp: initialize,
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App);
