import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { Link } from 'react-router-dom';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell className="resume-left-col" col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://i.ibb.co/s3w86Ff/0.jpg"
                                alt="avatar"
                                style={{ height: '200px' }}
                                className="avatar-image"
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>JONATHAN MENDES</h2>
                        <h4 style={{ color: 'grey' }}>Desenvolvedor Pleno</h4>
                        <hr style={{ borderTop: '3px solid #c3073f', width: '50%' }} />
                        <p>
                            Olá, tudo bem?
                            Meu nome é Jonathan Mendes e trabalho com desenvolvimento há mais de 4 anos. Meu primeiro contato com programação foi com Java realizando pequenos projetos para uma Escola de tecnologia.
                            Hoje atuo como desenvolvedor full stack e busco ser um Especialista em React.
                            Dê uma conferida nos meus projetos!
                            <br/>
                            <br/>
                             <Link style={{ textDecoration: 'none', color: '#6f2232' }} to="/projects">Ir para projetos.</Link>
                        </p>
                        <hr style={{ borderTop: '3px solid #c3073f', width: '50%' }} />
                        <h5>Email</h5>
                        <p><i class="fa fa-envelope" aria-hidden="true" /> jonathan.mendes89@gmail.com</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Educação</h2>

                        <Education
                            startYear={2018}
                            endYear={2020}
                            schoolName={`Técnologo - Faculdade Bandtec`}
                            schoolDescription={`    
                                Ingressou no ensino superior através do projeto geração futura. Uma simbiose entre empresas & acadêmia.
                            `}
                            knowledge={`
                                SCRUM, Itil, Cobit, Engenharia de Software, Sistemas Operacionais, Estrutura de Dados e Armazenamento, Orientação a Objetos, Paradigma Funcional, Programação Web, 
                                Design de Interfaces, Socioemocional, Banco de dados, Analise de sistemas.
                            `}
                        />
                        <hr style={{ borderTop: '3px solid #c3073f' }} />
                        <h2>Experiência</h2>
                        <Experience
                            startYear={`Jul 2018`}
                            endYear={`Até o momento.`}
                            jobName={`Full Stack Developer Intern at Digisystem`}
                            jobDescription={`
                                Desenvolvimento de serviços REST utilizando NodeJS + Express, MongoDB. Barramento utilizando IBM Integration BUS, criação de APIs utilizando ApiConnect.
                                Desenvolvimento de aplicações web utilizando Angular5+, Javascript, Typescript.
                            `}
                        />
                        <hr style={{ borderTop: '3px solid #c3073f' }} />
                        <h2>Technical Skills</h2>
                        <Skills
                            skill={`Angular CLI`}
                            progress={60}
                        />
                        <Skills
                            skill={`Javascript`}
                            progress={80}
                        />
                        <Skills
                            skill={`React`}
                            progress={25}
                        />
                        <Skills
                            skill={`Java`}
                            progress={68}
                        />
                        <Skills
                            skill={`NodeJS`}
                            progress={45}
                        />
                        <Skills
                            skill={`Express`}
                            progress={57}
                        />
                        <Skills
                            skill={`MongoDB`}
                            progress={80}
                        />
                        <Skills
                            skill={`SQL`}
                            progress={67}
                        />
                        <Skills
                            skill={`REST`}
                            progress={59}
                        />
                        <Skills
                            skill={`ASP.NET`}
                            progress={43}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;