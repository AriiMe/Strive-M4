import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Searchmf from "./Components/searchmf";
import Searchfetch from "./Components/searchfetch";
import Nav from "./Components/nav";
import Jumbo from "./Components/jumbo";
import Main from "./Components/main";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Movies from "./Components/Movies";
import Recent from "./Components/RecentlyAdded";


class App extends React.Component {
  render(){
  return ( <>
   

    <Router>
      
      <Nav title="Blyatflix"/>
      <Jumbo />

      <Route path="/" exact  render={(props) => <Main title="Home" {...props} />} />
      <Route path="/Movies" exact  render={(props) => <Movies title="Home" {...props} />} />
      <Route path="/RecentlyAdded" exact  render={(props) => <Recent title="Home" {...props} />} />
      
      <Footer />

    </Router>
    </>
  );
}
}
export default App;
