import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import HashComponent from './HashComponent/HashComponent';
import Wrapper from './UI/Wrapper/Wrapper';

class App extends Component {
  
  render() {
    return (
      <Wrapper>
        <Header />
        <div style={{ padding: '0px 50px 50px' }}>
          <Hero />
          <p style={{ color: '#FFF', width: '75%', lineHeight: '1.75', margin: '25px 0px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, labore ipsa dicta perferendis at facere rerum, quisquam odit quis aut, voluptate possimus vitae numquam obcaecati.</p>
          <HashComponent />
        </div>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
