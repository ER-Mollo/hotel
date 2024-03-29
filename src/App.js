import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Booknow from './pages/Booknow';
import Payment from './pages/Payments';
import Gallery from './pages/gallery';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>

          <Route exact path="/" element={<Home />}/>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/rooms/:id" component={SingleRoom} />
          <Route path="/rooms/" component={Rooms}/>
          <Route path="/booknow/:id" component={Booknow} />
          <Route path='/payments' component={Payment}/>
          <Route path='/gallery' component={Gallery}/>

          <Route component={Error}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
