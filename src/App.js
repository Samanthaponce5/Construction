import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Services';
import Contact from './Components/Contact';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>

        {/* <Route path='/about'><About/></Route>

        <Route path='/services'><Services/></Route>

        <Route path='/contact'><Contact/></Route> */}

        <Route path='/'><Home/></Route>




      </Switch>
     </Router>
    </div>
  );
}

export default App;
