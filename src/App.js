import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          {/* <Route path='/dialogs' render = { () => <Dialogs/>} />
          <Route path='/profile' render = { () => <Profile/>} /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
