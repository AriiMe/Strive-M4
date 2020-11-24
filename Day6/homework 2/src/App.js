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
import tvShows from "./Components/TvShows";
import Yeet from './Components/_TvShows'
import myList from "./Components/MyList";


class App extends React.Component {
  render(){
  return ( <>
   

    <Router>
      
      <Nav title="Blyatflix"/>
      <Jumbo />

      <Route path="/" exact  render={(props) => <Main title="Home" {...props} />} />
      <Route path="/Movies" exact  render={(props) => <Movies title="Movies" {...props} />} />
      <Route path="/RecentlyAdded" exact  render={(props) => <Recent title="Recentley Added" {...props} />} />
      <Route path="/TvShows" exact  render={(props) => <Yeet title="TvShows" {...props} />} />
      <Route path="/MyList" exact  render={(props) => <myList title="My List" {...props} />} />
      <Footer />

    </Router>
    </>
  );
}
}
export default App;
