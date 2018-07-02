import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Body from './Body'
import Side from './Side'
import Bottom from './Bottom'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      
    <main className="expanded row">
      <Body/>
      <Side/>
      <Bottom/>

      
    </main>
      <Footer/>
      </div>
    );
  }
}

export default App;
