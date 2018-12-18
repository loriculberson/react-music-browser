import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ArtistList from './components/ArtistList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    };
  }

  async componentDidMount() {
    const res = await axios.get('/artists.json');
    // setTimeout(() => {
      this.setState({
        artists: res.data
      });
    // }, 3000);
  }

  render() {
    return (
      <Router>
        <section style={ {width: '100%'} }>
          <NavBar />
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/artists" render={(props) => <ArtistList {...props} artists={this.state.artists} />}/>
          </div>
        </section>
      </Router>
    );
  }
}

export default App;
