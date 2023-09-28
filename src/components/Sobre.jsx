import React from 'react'
import './Sobre.css';

export default function Sobre() {
    let message = "RJSais é um projeto desenvolvido para a disciplina de Desenvolvimento de Sistemas Web da Universidade Federal de Itajubá - Campus Itabira. Os antigos donos da RJBetoneiras, após o grande sucesso verde em seu ramo de venda de betoneiras, decidem investir em um novo negócio."
  return (
    <section className="section-white">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                    <h2 className="section-title mt-5">Sobre nós!</h2>
                    <p className="section-subtitle">{message}</p>
                </div>

                <div className="col-sm-6 col-md-4">
                    <div className="team-item">
                        <img className="team-img" src="https://avatars.githubusercontent.com/u/103790807?v=4" alt="rhuan pablo" />
                        <h3>Rhuan Pablo</h3>
                        <div className="team-info">
                            <p>CEO/Dev</p>
                            <p>
                            "Começar um novo negócio na venda de sais é uma emocionante jornada em busca de sabores únicos, após o nosso negócio com betoneiras. Com dedicação e ousadia, levando aromas extraordinários às mesas dos clientes. Construiremos uma marca de destaque, repleta de sucesso e satisfação."
                            </p>
                            <ul className="team-icon">
                                <li>
                                    <a href="https://github.com/RhuanMalta" className="github">
                                    <i className="fa fa-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/rhuan-pablo-malta-lage-143432202/" className="linkedin">
                                    <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div className="team-item">
                        <img className="team-img" src="https://avatars.githubusercontent.com/u/113133054?v=4" alt="Ueld Judah" />
                        <h3>Ueld Judah</h3>
                        <div className="team-info">
                            <p>CEO/Dev</p>
                            <p>
                            "Estou extremamente orgulhoso por ser CEO desta loja de sal. Agradeço a confiança dos nossos clientes, fornecedores e colaboradores. Continuaremos a nos esforçar para entregar o melhor sal possível e superar suas expectativas. Obrigado por fazerem parte da nossa história de sucesso."
                            </p>

                            <ul className="team-icon">
                                <li>
                                    <a href="https://github.com/Jusdahh" className="github">
                                    <i className="fa fa-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/ueld-judah-nunes-nobrega/" className="linkedin">
                                    <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
