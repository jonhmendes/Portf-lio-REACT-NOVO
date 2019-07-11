import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Entre em contato</h2>
                        <hr />
                        <div className="contact-list">
                            <List style={{textAlign: 'center'}}>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '18px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (21) 96928-4932
                               </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '18px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        jonathan.mendes89@gmail.com
                                    </ListItemContent>
                              
                             
                                <div className="social-links">

                                        <a href="https://www.linkedin.com/in/jonathan-mendes-55b430128/" rel="noopener noreferrer" target="_blank">
                                            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                            linkedin
                                        </a>

                                        <a href="https://github.com/jonhmendes" rel="noopener noreferrer" target="_blank">
                                            <i class="fa fa-github-square" aria-hidden="true"></i>
                                        </a>

                                        </div>
                                        </ListItem>

                            </List>
                        </div>
                    </Cell>
                </Grid>
                    
            </div>
            
        )
    }
}

export default Contact;