import React from 'react'
import './App.css';

import ChildComponent from './ChildComponent'

// onclick
// onClick

// every component can have props
// every component can have a state

// a react component can be declared in TWO ways: as a FUNCTION or as a CLASS
// only CLASS components can have a state

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload, Stefano!
//         </p>
//         <ChildComponent strivers='element' counter={0} />
//         <ChildComponent strivers='component' />
//       </header>
//     </div>
//   );
// }

class App extends React.Component {

  state = {
    counter: 0
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.setState({ counter: this.state.counter + 90000000000000000000000000000000000000000000000000000000})}>
            INCREMENT COUNTER
          </button>
          <p>
            Edit <code>src/App.js</code> and save to reload, esketit!
        </p>
          <ChildComponent strivers='element' counter={this.state.counter} />
          <ChildComponent strivers='component' />
        </header>
      </div>
    );
  }
}

export default App;