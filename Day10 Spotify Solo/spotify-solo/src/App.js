

import './App.css';
import Main from './Components/Main';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from './Components/Nav'
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/Main.css"
import AlbumPage from './Components/AlbumPage';
import SignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Route path='/' exact component={Main} />
        <Route path='/AlbumPage' component={AlbumPage} />
        <Route path='/SignUp' component={SignUp} />
      </Router>
    </div>
  );
}

export default App;
