import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Typist from 'react-typist';
import { } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://i.ibb.co/s3w86Ff/0.jpg"
                            alt="avatar"
                            className="avatar-image"
                        />

                    <section className="background">

                    <div className="container">
                        <div className="column full adjust-center">
                            
                            <Typist avgTypingSpeed={400} startDelay={1000} onTypingDone={this.onHeaderTyped}>
                                <div className="text-landing">
                                    <span className="color-aquagreen">&lt;h1&gt;</span>
                                    <span className="color-white">JONATHAN MENDES </span>
                                    <span className="color-aquagreen">&lt;h1&gt;</span>
                                </div>
                                <br />
                                <br />
                                <div className="text-lading-2">
                                    <Typist.Delay ms={1000} />
                                    <span className="color-aquagreen">&lt;p&gt;</span>
                                    <span className="color-white">Web Devolo</span>
                                    <Typist.Backspace count={3} delay={800} />
                                    <span className="color-white">eloper</span>
                                    <span className="color-aquagreen">&lt;/p&gt;</span>
                                </div>
                            </Typist>
                        </div>
                    </div>
</section>

                        <div className="banner-text">
                            <h1>Full Stack Developer</h1>
                            <hr/>
                            <p> Java | IONIC 3 + | React Native |  React | NodeJS | Express | MongoDB | Javascript </p>
                         <div className="social-links">

                                <a href="https://www.linkedin.com/in/jonathan-mendes-55b430128/" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                    linkedin
                                </a>

                                <a href="https://github.com/jonhmendes" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                    github
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;