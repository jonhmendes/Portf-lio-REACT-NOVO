import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background: 'url(https://i.ibb.co/fkTQbBh/calculadora.png) center / cover'
                        }}></CardTitle>
                        <CardText>
                            Calculadora funcional baseada na calculadora do MacOS, foi utilizado React para aprendizado do framework, acesse o Github para visualizar o código fonte.
                    </CardText>
                        <CardActions border>
                            <a style={{ textDecoration: 'none' }} href="https://github.com/GabLeme/Calculadora" target="_blank" rel="noopener noreferrer"><Button colored>Github - Código fonte</Button></a>
                        </CardActions>
                    </Card>


                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background: 'url(https://i.ibb.co/v19kXY1/portifolio.png) center / cover'
                        }}></CardTitle>
                        <CardText>
                            Portifolio criado utilizando React + React-mdl, acesse o Github para visualizar o código fonte.
                    </CardText>
                        <CardActions border>
                            <a style={{ textDecoration: 'none' }} href="https://github.com/GabLeme/Portifolio-React" target="_blank" rel="noopener noreferrer"><Button colored>Github - Código fonte</Button></a>
                        </CardActions>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background: 'url(https://i.ibb.co/Wc9Hb74/reembolso.png) center / cover'
                        }}></CardTitle>
                        <CardText>
                            Sistema de reembolso responsivo criado utilizando Angular CLI 5+, NodeJS + Express + Loopback, MongoDB + SQL. O sistema foi criado para atender as novas regras da empresa após a compra de outra empresa.
                            Código fonte sigiloso.
                    </CardText>
                        <CardActions border>
                            <Button colored>Código não disponível</Button>
                            <a style={{ textDecoration: 'none' }} href="http://ace.digisystem.com.br:8080/#/auth" target="_blank" rel="noopener noreferrer"><Button colored>Acessar Sistema</Button></a>
                        </CardActions>


                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/6/65/Imagem_n%C3%A3o_dispon%C3%ADvel.svg) center / cover'
                        }}></CardTitle>
                        <CardText>
                            REST Api criada utilizando Express + MSSQL + configuração heroku, foi hospedada no Heroku para integração continua, acesse o Github para visualizar o código fonte.
                    </CardText>
                        <CardActions border>
                            <a style={{ textDecoration: 'none' }} href="https://github.com/GabLeme/Rest-API-NodeJS-Express" target="_blank" rel="noopener noreferrer"><Button colored>Github - Código fonte</Button></a>
                        </CardActions>


                    </Card>
                </div>
            )
        }
        else {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background: 'url(https://camo.githubusercontent.com/7eecbbcd068dea9f85c63a9795d31775a358e52f/68747470733a2f2f692e696d6775722e636f6d2f747332497679332e706e67) center / cover'
                        }}></CardTitle>
                        <CardText>
                            Sistema web para monitoramento de Hardware utilizando OSHI Library, JSensors, Java + SQL, NodeJS + ASP.net | Angular, o projeto existe em duas versões, a versão do Angular logo estará disponível, acesse o Github para visualizar o código fonte.
                        </CardText>
                        <CardActions border>
                            <a style={{ textDecoration: 'none' }} href="https://github.com/GabLeme/taydunoc" target="_blank" rel="noopener noreferrer"><Button colored>Github - Código Fonte</Button></a>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background: 'url(https://i.ibb.co/nbJzj3z/alg.png) center / cover'
                        }}></CardTitle>
                        <CardText>
                            Sistema web para monitoramento de temperatura utilizando Arduino UNO + NodeJS + ASP.net + SQL, acesse o Github para visualizar o código fonte.
                        </CardText>
                        <CardActions border>
                            <a style={{ textDecoration: 'none' }} href="https://github.com/GabLeme/ALGDigital" target="_blank" rel="noopener noreferrer"><Button colored>Github - Código Fonte</Button></a>
                        </CardActions>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{
                            color: '#fff', height: '176px', background: 'url(https://i.ibb.co/bgGg8zw/java.png) center / cover'
                        }}></CardTitle>
                        <CardText>
                            Jogo de xadrez feito em Java com a ajuda do curso Java OOP Udemy, acesse o Github para visualizar o código fonte.
                        </CardText>
                        <CardActions border>
                            <a style={{ textDecoration: 'none' }} href="https://github.com/GabLeme/Sistema-de-Xadrez" target="_blank" rel="noopener noreferrer"><Button colored>Github - Código Fonte</Button></a>
                        </CardActions>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>Angular CLI</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>Java | C#</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;