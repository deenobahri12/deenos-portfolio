import React, { Component } from 'react';
import './App.css';
import { Header, Layout, Navigation, Drawer, Content } from 'react-mdl'
import Main from './components/main';
// import Typist from 'react-typist';


class App extends Component { 
  render() {
      return(
        <div>
    <Layout className='area'>      

<div>
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >

        <Header transparent title>
            <Navigation className='navLinks'>
                <a href="/"><bold className="link">Home</bold></a>
                <a href="/resume"><bold className="link">Resume</bold></a>
                <a href="/aboutme">About me</a>
                <a href="/projects">Apps</a>
            </Navigation>
        </Header>
        
        <div>
        <Main/>
        </div>

        <Drawer title>
            <Navigation>
                <a href="/"><bold className="link">Home</bold></a>
                <a href="/resume"><bold className="link">Resume</bold></a>
                <a href="/aboutme">About me</a>
                <a href="/projects">Apps</a>
            </Navigation>
        </Drawer>
        <Content/>           

    </Layout>
</div>

    );
  }
}

export default App;
