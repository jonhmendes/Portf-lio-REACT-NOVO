import React, { Component } from 'react';
import './App.css';
import './css/FontColor.css'
import './css/Grid.css'
import './css/Landing.css'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Oxygen' }} to="/">Meu portfólio</Link>} scroll>
            <Navigation>
              <Link style={{ color: 'white', fontFamily: 'Oxygen' }} to="/resume">Sobre mim</Link>
              <Link style={{ color: 'white', fontFamily: 'Oxygen' }} to="/projects">Projetos</Link>
              <Link style={{ color: 'white', fontFamily: 'Oxygen' }} to="/contact">Contato</Link>
            </Navigation>
          </Header>
          <Drawer style={{ backgroundColor: '#1a1a1d', border: 'none' }} title={<Link style={{ textDecoration: 'none', color: 'white', fontFamily: 'Oxygen' }} to="/">Meu portfólio</Link>}>
            <Navigation>
              <Link style={{ color: 'white', fontFamily: 'Oxygen' }} to="/resume">Sobre mim</Link>
              <Link style={{ color: 'white', fontFamily: 'Oxygen' }} to="/projects">Projetos</Link>
              <Link style={{ color: 'white', fontFamily: 'Oxygen' }} to="/contact">Contato</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
