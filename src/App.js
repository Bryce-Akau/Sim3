import React, { Component } from 'react';
import Auth from './component/Auth';
import Dashboard from './component/Dashboard';
import Form from './component/Form';
import Post from './component/Post';
import Nav from './component/Nav';
import routes from './routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
        <Dashboard />
        <Form />
        <Post />
        <Nav />
        { routes }
      </div>
    );
  }
}

export default App;
